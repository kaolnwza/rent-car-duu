# ส่งพี่ไปเช่ารถดู๊

- Register page จะรวม Loaner และ Loanee, User 1 user สามารถเป็นได้ทั้ง Loanee และ Loaner

  - username
  - password
  - firstname
  - lastname
  - phone
  - email
  - date
  - age
  - address

- Page ลงทะเบียนรถสำหรับ Loaner

  - rentId (เพิ่มอัตโนมัต)
  - carId (เพิ่มอัตโนมัติ)
  - carType
  - carModel
  - carRegistrationNumber
  - carLocation
  - carPrice (ต่อชม. ตามสไลด์)

  - carPickDate
  - carReturnDate

- Page แสดง List รถที่ให้บริการสำหรับ Loaner และประวัติ
  - rentId
  - carId
  - loaneeFirstname
  - loaneeLastname
  - loaneePhone
  - loaneeEmail
  - carPickDate
  - carReturnDate
- ตลาดรถที Loaner ให้บริการ

  - กดเข้าไปดูข้อมูลรถได้ ในเพจจะแสดง
    - carId (เพิ่มอัตโนมัติ)
    - carType
    - carModel
    - carRegistrationNumber
    - carLocation
    - carPrice (ต่อชม. ตามสไลด์)
    - กดลงทะเบียนเช่ารถ Loanee ใส่ข้อมูล
      - rentId (เพิ่มอัตโนมัตื)
      - carId ดึงจาก carId ทีั่ Loaner ลงทะเบียนไว้
      - loaneeFirstname (ดึงข้อมูลเองจาก firstname ของ loanee)
      - loaneeLastname (ดึงข้อมูลเองจาก lastname ของ loanee)
      - loaneePhone (ดึงข้อมูลเองจาก phone ของ loanee)
      - loaneeEmail (ดึงข้อมูลเองจาก email ของ loanee)
      - loaneeAge (ดึงข้อมูลเองจาก age ของ loanee)
      - carPickDate
      - carReturnDate

- Page แสดง List รถที่ให้บริการสำหรับ Loanee และประวัติ
  - rentId
  - carId
  - loanerFirstname
  - loanerLastname
  - loanerPhone
  - loanerEmail
  - carPickDate
  - carReturnDate

ยังไม่ใส่ข้อมูลประกันภัย กับ ธุรกิจ(และประวัติ)
