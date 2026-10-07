import os
from PIL import Image
from pillow_heif import register_heif_opener

# Daftarkan pembaca HEIC ke dalam Pillow
register_heif_opener()


def convert_heic(main_folder):
    print(f"Find HEIC and convert to JPG: {main_folder}\n")
    succes_count = 0
    fail_count = 0

    for root, dirs, files in os.walk(main_folder):
        for file in files:
            if file.lower().endswith(".heic"):
                heic_path = os.path.join(root, file)

                name_default = os.path.splitext(file)[0]
                jpg_path = os.path.join(root, f"{name_default}.jpg")

                if os.path.exists(jpg_path):
                    print(f"[-] Skip (already_exists): {jpg_path}")
                    continue

                try:
                    image = Image.open(heic_path)
                    image.convert("RGB").save(jpg_path, "JPEG")
                    print(f"[+] Succesfull: {heic_path} -> {jpg_path}")
                    succes_count += 1
                except Exception as e:
                    print(f"[!] Failed to convert: {heic_path}: {e}")
                    fail_count += 1

    print("\nProcess Completed")
    print(f"Succesfull: {succes_count}")
    print(f"Failed: {fail_count}")


path_folder_Anda = "."
print(path_folder_Anda)
convert_heic(path_folder_Anda)
