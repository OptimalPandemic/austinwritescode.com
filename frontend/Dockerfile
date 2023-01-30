FROM nginx:latest
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/* /usr/share/nginx/html/
EXPOSE 80