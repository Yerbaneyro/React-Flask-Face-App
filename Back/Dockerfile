# syntax=docker/dockerfile:1

FROM debian:buster

WORKDIR /back

RUN apt-get update && apt-get install -y gcc clang clang-tools cmake python3 python3-pip

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]