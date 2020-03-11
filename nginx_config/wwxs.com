server {
        listen  80;
        listen  [::]:80;
        server_name     wwxs.wwucyber.com;
#        return  301 https://wwxs.wwucyber.com$request_uri;
#}

#server {
#   listen 443 ssl http2 default_server;
#   listen [::]:443 ssl http2 default_server;
#   server_name wwxs.wwucyber.com;
 
   access_log  /var/log/nginx/wwxs.wwucyber.com.access.log  main;

   # Define the specified charset to the “Content-Type” response header field
   charset utf-8;

   error_page   500 502 503 504  /50x.html;
   location = /50x.html {
       root   /usr/share/nginx/html;
   }

   # Configure NGINX to reverse proxy HTTP requests to the upstream server (Gunicorn (WSGI server))
   location / {
       # Define the location of the proxy server to send the request to
       proxy_pass http://127.0.0.1:8080;
 
       # Redefine the header fields that NGINX sends to the upstream server
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
 
       # Define the maximum file size on file uploads
       client_max_body_size 5M;
   }


#   ssl_certificate  /etc/ssl/certs/nginx-selfsigned.crt;
#   ssl_certificate_key  /etc/ssl/private/nginx-selfsigned.key;
}

