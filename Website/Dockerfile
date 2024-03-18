# Use a base image. For a simple website, you can use nginx
FROM nginx:latest

# Copy the website files into the image
COPY ./website /usr/share/nginx/html

# Expose the port the web server will listen on
EXPOSE 80

# Command to run the web server
CMD ["nginx", "-g", "daemon off;"]