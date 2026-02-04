# ให้สร้างโฟลเดอร์เป็นชื่อตามค่าที่เรา input เข้าไปและเติม exนำหน้า

#!/bin/bash

# เช็คว่ามีค่าที่ input เข้าไปมั้ย $# คือจน.ค่าที่ inpt
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "$@"
    do
        mkdir "ex$arg"
    done
fi

# เช็กด้วยคำสั่ง ./build.sh และ ls -l เพื่อดูว่าโฟลเดอร์ถูกสร้างขึ้นมาจริงบ่