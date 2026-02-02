#!/bin/bash
find . -maxdepth 1 | wc -l 

# โจทย์คือนบจำนวนไฟล์+โฟลเดอร์ปัจจุบัน
# chmod +x count_files.sh อนุญาติให้มันรัน
# เช็คโดย ./count_files.sh | cat -e