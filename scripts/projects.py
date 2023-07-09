'''
Tool to generate project data files

Usage:
    python projects.py <csv file> --output <output folder> -c
        `csv file` -> input file to be procesed
        `--output` -> folder where the new yaml files will be stored
        `-c -> clean up directory
'''

import csv
from enum import IntEnum
import yaml
import os
import argparse
from pathlib import Path
import sys

def noop(self, *args, **kw):
    pass

yaml.emitter.Emitter.process_tag = noop

class Columns(IntEnum):
    NAME = 0
    URL = 1
    DESCRIPTION = 2
    STARTDATE = 3
    ENDDATE = 4
    SKILLS = 5
    COMPANY_NAME = 6
    COMPANY_URL = 7
    LICENSE = 8
    ACTIVE = 9

class Company:
    def __init__(self, name, url) -> None:
        self.name = name
        self.url = url

class Project:
    def __init__(self, name, url, description, startDate, endDate, skills, license, company, active) -> None:
        self.name = name
        self.url = url
        self.description = description
        self.startDate = startDate
        self.endDate = endDate
        self.skills = self.asArray(skills)
        self.license = license
        self.company = company
        self.active = active
    
    def asArray(self, string):
        return string.split('|')

    def getFileName(self, index, extension):
        translation = str.maketrans('','','()')
        fileName = self.name.lower().replace(' ','-').translate(translation)
        return f'{index}-{fileName}.{extension}'
                
def saveAsFile(filePath, data):
    with open(filePath,'w') as file:
        file.write(data)

def cleanOutputFolder(path):
    files = os.listdir(path)

    for file in files:
        filePath = os.path.join(path, file)
        os.remove(filePath)

parser = argparse.ArgumentParser()

parser.add_argument('source', type=str, help='Path to the source csv file')

parser.add_argument('-o', '--output', type=str, default='./output', help='Output directory which will contain the result yaml files')

parser.add_argument('-c', '--clean', action='store_true', default=True, help='Clean the output directory before process CSV source file')

# Parse the command-line arguments
args = parser.parse_args()

output = args.output
output_dir = Path(output)

if not output_dir.is_dir():
    print("You need to specify a directory as an output")
    raise SystemExit()

if not output_dir.exists():
    os.makedirs(output)

if args.clean:
    cleanOutputFolder(output)

with open(args.source, newline='') as csvFile:
    spamreader = csv.reader(csvFile, delimiter=',')
    next(spamreader)
    for index, row in enumerate(spamreader):
        company = Company(row[Columns.COMPANY_NAME.value], row[Columns.COMPANY_URL.value])
        project = Project(
            row[Columns.NAME.value],
            row[Columns.URL.value],
            row[Columns.DESCRIPTION.value],
            row[Columns.STARTDATE.value],
            row[Columns.ENDDATE.value],
            row[Columns.SKILLS.value],
            row[Columns.LICENSE.value],
            company,
            row[Columns.ACTIVE.value]
            )
        saveAsFile(
            os.path.join(output,project.getFileName(index,'yaml')), 
            yaml.dump(project, default_flow_style=False)
        )