import zipfile
import os

zip_path = "images/test.zip"
out_dir = "images/boca_1"
os.makedirs(out_dir, exist_ok=True)

try:
    with zipfile.ZipFile(zip_path, 'r') as z:
        # Get list of all files
        all_files = z.namelist()
        
        # Filter for jpg/png images
        image_files = [f for f in all_files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        
        # Sort or just pick first 3
        selected = image_files[:3]
        
        for idx, file_info in enumerate(selected):
            # Extract to out_dir with a new name
            extracted_path = z.extract(file_info, out_dir)
            
            # Rename for cleaner path
            ext = os.path.splitext(extracted_path)[1]
            new_path = os.path.join(out_dir, f"image_{idx+1}{ext}")
            os.rename(extracted_path, new_path)
            print(f"Extracted: {new_path}")
            
    print("Extraction complete. Deleting massive zip file...")
    os.remove(zip_path)
    
except zipfile.BadZipFile:
    print("Error: The downloaded file is not a valid zip file.")
