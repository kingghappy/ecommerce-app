# Sử dụng Node.js image từ Docker Hub
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Copy các tệp cấu hình package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy tất cả các tệp còn lại vào container
COPY . .

# Mở port 5000
EXPOSE 5000

# Chạy ứng dụng
CMD ["npm", "start"]
