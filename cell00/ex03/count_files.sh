#!/bin/bash
find . -maxdepth 1 | wc -l 

# โจทย์คือนบจำนวนไฟล์+โฟลเดอร์ปัจจุบัน
# เช็คโดย ./count_files.sh | cat -e