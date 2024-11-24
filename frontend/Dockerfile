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

# Build ứng dụng React
RUN npm run build

# Cài đặt server phục vụ ứng dụng tĩnh
RUN npm install -g serve

# Mở port 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["serve", "-s", "build"]
