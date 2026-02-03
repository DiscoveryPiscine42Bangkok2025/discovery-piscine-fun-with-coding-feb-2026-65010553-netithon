#!/bin/bash

# ถ้าไม่มีอะไรเลย
if [ $# -eq 0 ]; then  # $#คือจน.ที่รับ input
  echo "No arguments supplied"
  exit 0
fi

# แสดงทีละตัวแต่ไม่เหิน 3 ตัว
if [ $# -ge 1 ]; then #then = ถ้าเงื่อนไขจริงทำไร, -eq = เท่ากับ, -ne = ไม่เท่ากับ, -gt = มากกว่า, -lt = น้อยกว่า, -le = น้อยกว่าหรือเท่ากับ
  echo "$1"
fi

if [ $# -ge 2 ]; then
  echo "$2"
fi

if [ $# -ge 3 ]; then
  echo "$3"
fi
# ./argv.sh คำสั่งในการรนน


