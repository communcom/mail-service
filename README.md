# mail-service

#### Clone the repository

```bash
git clone https://github.com/communcom/mail-service.git
cd mail-service
```

#### Create .env file

```bash
cp .env.example .env
```

Add variables

```bash
MAILGUN_API_KEY=
GLS_DOMAIN=commun.com
GLS_FROM_WHO_EMAIL=no-reply@commun.com
GLS_EMAIL_SUBJECT=Your Commun Registration Verification Code

```

#### Create docker-compose file

```bash
cp docker-compose.example.yml docker-compose.yml
```

#### Run

```bash
docker-compose up -d --build
```
