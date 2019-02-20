#!/bin/sh

PROCESS=apache2
INTERVAL=10
while true; do
      OCCURRENCES=`ps ax | grep $PROCESS | grep -v grep| wc -l`
      if [ $OCCURRENCES -eq 0 ]; then
                 /etc/init.d/apache2 start
		 echo "Apache is DOWN!" >> /home/alz/desafio2/apache.log
		 echo "Apache is restart at `date +%d/%m/%Y" - "%H:%M:%S`" >> /home/alz/desafio2/apache.log 
                 tail -n 10 /home/alz/desafio2/apache.log | ssmtp -vvv azanatta83@gmail.com
		 echo "Email with logs send to azanatta83@gmail.com" >> /home/alz/desafio2/apache.log
		 echo "==================================================" >> /home/alz/desafio2/apache.log
       fi
        sleep $INTERVAL
done
