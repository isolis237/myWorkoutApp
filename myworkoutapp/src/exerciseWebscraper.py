import requests
from bs4 import BeautifulSoup
import re


def getMuscleCategory():
    URL = 'https://exrx.net/Lists/Directory'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')

    links = []

    for a in soup.find_all('a', href=True):
        if "ExList" in a.get("href"):
            links.append(a['href'])

    filtered = []
    for link in links:
        if re.search("Wt$", link):
            parts = link.split("/")
            filtered.append(parts[1])
    filtered[1] = "ShouldWt"

    fixed = []
    for item in filtered:
        fixed.append(item.replace("Wt", ""))

    #Returns muscle groups with 'Wt' at the end
    #return filtered
    #Return muscle groups without 'Wt' at the end
    return fixed

def getExerciseList(muscleGroup):
    URL = "https://exrx.net/Lists/ExList/" + muscleGroup
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')

    links = []
    for a in soup.find_all('a', href=True):
        if "https://exrx.net/Weight" in a.get("href"):
            links.append(a['href'].replace("https://exrx.net/", ""))
        elif "WeightExercises" in a.get("href"):
            links.append(a['href'].replace("../../", ""))

    return links

def getExerciseInfo(exercise):
    URL = "https://exrx.net/" + exercise
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")

    title = soup.find('h1',class_="page-title").text

    textfields = soup.find_all("p")

    get_details = soup.find_all('td')
    if len(get_details) < 1:
        type = "None"
    else:
        details = get_details[0].text.split("Force:")
        type = details[1]

    list = []
    for field in textfields:
        if len(field.text) > 100:
            list.append(field.text)

    if "Comments" in list[0]:
        if "Classification" in list[0]:
            parts = list[0].split("Preparation")
            exercise_description = parts[1].replace("Preparation", "").replace("Execution", " ").replace("Instructions", "")
        else:
            desc = list[0].split("Comments")
            exercise_description = desc[0].replace("Preparation", "").replace("Execution", " ").replace("Instructions", "")
    elif "Classification" in list[0]:
        parts = list[0].split("Instructions")
        exercise_description = parts[1].replace("Preparation", "").replace("Execution", " ").replace("Instructions", "")
    else:
        exercise_description = list[0].replace("Preparation", "").replace("Execution", " ").replace("Instructions", "")

    info = {"title":title,
            "description": exercise_description,
            "type": type
            }
    return info


list = getExerciseList("BackWt")
"""
for exercise in list:
    print(getExerciseInfo(exercise))
    print("")
"""
dict = {getExerciseInfo(exercise)["title"]: getExerciseInfo(exercise) for exercise in list}

print(dict)

"""
def createDB():
    list = getExerciseList("WaistWt")
    #exListDict = {"Waist": {getExerciseInfo(exercise)["title"]: getExerciseInfo(exercise) for exercise in list}}
    #toReturn = {muscleCat: {getExerciseInfo(exercise)["title"]: getExerciseInfo(exercise) for exercise in getExerciseList(muscleCat + "Wt")} for muscleCat in getMuscleCategory()}
    #print(exListDict)


createDB()
"""





"""

Chest {
    bench-press {
        title: bench-press,
        description: bench-press description,
        type: push
    }
    db-flies {
        title: db-flies,
        description: db-fly description,
        type: push
    }
}

"""
