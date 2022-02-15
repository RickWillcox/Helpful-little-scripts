import json

file_prefix = "WHAT_TO_ADD_TO_FILE_NAME_PREFIX"
output_json = "RELATIVE_PATH_TO_OUTPUT_JSON"
base_json = "RELATIVE_PATH_TO_DARK_HELP_JSON"

def write_json(new_entry, output_file):
    with open(output_file,'r+') as file:
        # First we load existing data into a dict.
        output_file = json.load(file)
        # Join new_data with file_data inside emp_details
        output_file["images"].append(new_entry)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(output_file, file, indent = 4)    


with open("src/ProcessJson/results100-10secs.json", "r") as input_file:
    data = json.load(input_file)


for image in data["file"]:
    if "prediction" in image:
        if "all_probabilities" in image["prediction"][0]:
            if (image["prediction"][0]["all_probabilities"][0]["name"] == "person"):
                if (image["prediction"][0]["all_probabilities"][0]["probability"] > 0.90):
                    image_dict = {file_prefix + image["filename"].split("/")[1] :{
                        "label" : image["prediction"][0]["all_probabilities"][0]["name"],
                        "probability" : image["prediction"][0]["all_probabilities"][0]["probability"]
                    }}

                    write_json(image_dict, output_json)
