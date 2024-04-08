"use client";
import { ParallaxScroll } from "./parallax-scroll"

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
    "https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/433137251_276831545464344_3254476338516584029_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mwJVKTu54KcAb64sR6S&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfC0gtdeBweuc1IF4xeznv914u9P-KB-hBg-yRLuBXO6bA&oe=66182CF8",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/426365856_253448597802639_4318660545404903172_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0Y2XRISS08oAb6h-oCh&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfDk_DDTwP9c7sEKhIW9xDMIyJbrgA8wgcl8YN5Nk_r9Kg&oe=66182C80",
    "https://media.licdn.com/dms/image/D4D22AQEJ795XnZZrGg/feedshare-shrink_800/0/1710860520684?e=1715212800&v=beta&t=5hxc5QTWcU5qWyIMpoiiprOnsZTFx4qlTqKC5H_o3T8",
    "https://media.licdn.com/dms/image/D4D22AQHGtXbQIRLEOA/feedshare-shrink_2048_1536/0/1708523388183?e=1715212800&v=beta&t=cqic9RmcYvyURg8HdPhhWhaIQLW6YTx4O8xB0iE3bXo",
    "https://media.licdn.com/dms/image/D4D22AQFtPJdIa7SRZg/feedshare-shrink_800/0/1708523388211?e=1715212800&v=beta&t=sXvI3R44PFEvITB1gBZBSLK7K-wqIgTj21Kp9n-mqqY",
    "https://media.licdn.com/dms/image/D4D22AQGTJqgkZxgQUg/feedshare-shrink_800/0/1708523389071?e=1715212800&v=beta&t=5t2o4cEvzFY2pgqPO3XVfhKlICi85IIXXD5CrVuvrRk",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/415258381_227424460405053_6036088982237595495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=indpQ9SaKnkAb4c-siu&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfBq-AkOsEm1nmRkxwn57A3YqUyosXixb18akHtINX-AlQ&oe=66182237",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/409766344_215641221583377_4162114684192466211_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9mQ4JdXoyDoAb6ujtQb&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfB2j06obgTQn5kI3n4sH4snrKv9YaubT-urZLvaajbMlg&oe=66182AE5",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/345844959_1524497704626200_8884595786854316570_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-57mvXK1L7EAb6Cr0W0&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfC9xWzMbXbS3kVZA6zSl2i3DyTcYoFEOTPJslaB8IL3fw&oe=66182507",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/340770998_587775416660417_6306941349518826414_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xKca_p3fUAwAb4YNs0d&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfD0UY5ah909enB_BhXwwMlO1UjWjex47fGbmmLP1xB5VA&oe=66182D32",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/342226230_255532943575328_5810004172549094478_n.jpg?stp=c0.249.1294.1294a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aFvN2hZqGp8Ab5lxzep&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfCXbhpFMp0fY0q83Brw0U7Se4_P1JU4GV8vTAyINs9UPg&oe=66180A4E",
    "https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/322801379_689640069288618_3388144156042723304_n.jpg?stp=c0.169.1535.1535a_dst-jpg_s552x414&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MROugBDT0ugAb7CNpCA&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfBobS81fva1aTb0Ay5cm0bj4b7IMYdviM8RW8sZL_2B7A&oe=661808CF",
    "https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/319424007_1825265157821775_8507594945626711516_n.jpg?stp=c0.185.1487.1487a_dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fj-nlnth91UAb4hzZdb&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfB4PESqbRPff34HmlRNP_2HjIwXamR7MqldVSAfPe2TNg&oe=66180FC9",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/321732524_550038893658455_1283672977258776453_n.jpg?stp=c0.295.1153.1153a_dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nbAeESlGO3oAb78y8iP&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfCs3oZsOf9B8ECvA4xpuXQZCnFsb-4gaGBxP8OTwr8SOg&oe=6618158A",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/276141247_1623598484655111_7886782500192243091_n.jpg?stp=c80.0.414.414a_dst-jpg_p552x414&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m4a1mECi91cAb5AT45O&_nc_oc=AdhKlXV1NR3tQwTGWxDvvCEmwDjU9T61cJXtShYT1Stu7GaHxtD4JFq2xeGCptwpGjXNyk19oiFj1ZlcekuJCGub&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfAHa9TIjhg6Ayc-xOuEaRFlSgtZS1h0YsCBqkXkAxCw1w&oe=6618062A",
    "https://scontent.fbwa5-1.fna.fbcdn.net/v/t1.6435-9/96753207_1130230197325278_8706086648170938368_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X1-dbC1Cy5YAb5qjXwv&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfD8E9lEkazABQV1Rm5RSpjONqb7kyx44D7rxi5l81qy5Q&oe=6639D2CB",
    "https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/325864094_2126525837540515_8190545373383239306_n.jpg?stp=c161.0.414.414a_dst-jpg_p552x414&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FWTQT2F8YJAAb7qsrjG&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfD3reEbSQi77RmVOPsZ_8VGAq5HoU1_nyHc0IIzZNqX4A&oe=661810F0",
  ];
