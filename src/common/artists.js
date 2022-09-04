const artists = [
    {
        "id": "A1",
        "first_name": "Marlon",
        "last_name": "Brando",
        "role_type": "ACTOR",
        "profile_description": "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brando's Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Marlon_Brando"
    },
    {
        "id": "A2",
        "first_name": "Al",
        "last_name": "Pacino",
        "role_type": "ACTOR",
        "profile_description": "Alfredo James Pacino is an American actor and filmmaker. Pacino has had a career spanning over five decades, during which time he has received numerous accolades and honors both competitive and honorary, among them an Academy Award, two Tony Awards, two Primetime Emmy Awards, a British Academy Film Award, four Golden Globe Awards, the Lifetime Achievement Award from the American Film Institute, the Golden Globe Cecil B. DeMille Award, and the National Medal of Arts. He is also one of few performers to have won a competitive Oscar, an Emmy, and a Tony Award for acting, dubbed the 'Triple Crown of Acting'.",
        "wiki_url": "https://en.wikipedia.org/wiki/Pedro_Pascal"
    },
    {
        "id": "A3",
        "first_name": "Christian",
        "last_name": "Bale",
        "role_type": "ACTOR",
        "profile_description": "Christian Charles Philip Bale is an English actor and producer. He has starred both in blockbuster films and smaller projects from independent producers and art houses. Born in Haverfordwest, Wales, to English parents, he first caught the public eye at the age of 13, when he was cast in the starring role of Steven Spielberg's Empire of the Sun. After a string of semi-successful feature films, he portrayed Wall Street banker and serial killer Patrick Bateman in American Psycho to widespread critical acclaim. His reputation for going great lengths to portray characters in films was first noted in the psychological thriller The Machinist, where he lost 28.5 kg to play the main lead. Within six months he gained 45 kg to star as Batman in Christopher Nolan's Batman Begins",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Christian_Bale_2014_%28cropped%29.jpg/1024px-Christian_Bale_2014_%28cropped%29.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Christian_Bale"
    },
    {
        "id": "A4",
        "first_name": "Heath",
        "last_name": "Ledger",
        "role_type": "ACTOR",
        "profile_description": "Heath Andrew Ledger was an Australian actor and director. After performing roles in several Australian television and film productions during the 1990s, Ledger left for the United States in 1998 to further develop his film career. His work comprised nineteen films, including Brokeback Mountain and The Dark Knight. Ledger received numerous posthumous accolades for his critically acclaimed performance in the film The Dark Knight, including the Academy Award for Best Supporting Actor and Best Actor International Award at the 2008 Australian Film Institute Awards",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Heath_Ledger_%28Berlin_Film_Festival_2006%29_revised.jpg/1024px-Heath_Ledger_%28Berlin_Film_Festival_2006%29_revised.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Heath_Ledger"
    },
    {
        "id": "A5",
        "first_name": "Leonardo",
        "last_name": "DiCaprio",
        "role_type": "ACTOR",
        "profile_description": "Leonardo Wilhelm DiCaprio is an American actor and film producer. DiCaprio began his career by appearing in television commercials in the late 1980s. He next had recurring roles in various television series, such as the soap opera Santa Barbara and the sitcom Growing Pains. DiCaprio's portrayals of Howard Hughes in The Aviator (2004) and Hugh Glass in The Revenant won him the Golden Globe Award for Best Actor – Motion Picture Drama. His performance as Jordan Belfort in The Wolf of Wall Street won him the Golden Globe award for Best Actor – Motion Picture Musical or Comedy. He also won the Academy Award for Best Actor and BAFTA Award for his performance in The Revenant. DiCaprio is the founder of his own production company, Appian Way Productions.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Leonardo_DiCaprio_visited_Goddard_Saturday_to_discuss_Earth_science_with_Piers_Sellers_%2826105091624%29_cropped.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"
    },
    {
        "id": "A6",
        "first_name": "Joseph",
        "last_name": "Gordon-Levitt",
        "role_type": "ACTOR",
        "profile_description": "Joseph Leonard Gordon-Levitt is an American actor, filmmaker, singer, and entrepreneur. As a child, Gordon-Levitt appeared in many films and TV series. He took a break from acting to study at Columbia University, but dropped out in 2004 to pursue acting again. He has since starred in  films like (500) Days of Summer, Inception, The Dark Knight Rises, G.I. Joe: The Rise of Cobra and others. For his leading performances in (500) Days of Summer and 50/50, he was nominated for the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Joseph_Gordon-Levitt_2013.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Joseph_Gordon-Levitt"
    },
    {
        "id": "A7",
        "first_name": "Matthew",
        "last_name": "McConaughey",
        "role_type": "ACTOR",
        "profile_description": "Matthew David McConaughey is an American actor, producer, model, writer and director. McConaughey achieved ample success in 2013 and 2014. In 2013, McConaughey portrayed Ron Woodroof, a cowboy diagnosed with AIDS in the biographical film Dallas Buyers Club, which earned him the Academy Award, Critics' Choice Movie Award, Golden Globe Award, and Screen Actors Guild Award, all for Best Actor, among other awards and nominations. In 2014, he starred as Rust Cohle in the first season of HBO's crime drama anthology series True Detective, for which he won the Critics' Choice Television Award and TCA Award, and was nominated for the Primetime Emmy Award, Golden Globe Award, and Screen Actors Guild Award.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Matthew_McConaughey"
    },
    {
        "id": "A8",
        "first_name": "Anne",
        "last_name": "Hathaway",
        "role_type": "ACTRESS",
        "profile_description": "Anne Jacqueline Hathaway is an American actress and singer. One of the world's highest-paid actresses in 2015, she has received multiple awards, including an Academy Award, a Golden Globe, a British Academy Film Award, and an Emmy. Her films have earned $6.4 billion worldwide, and she appeared in the Forbes Celebrity 100 in 2009.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Anne_Hathaway_in_2017.png",
        "wiki_url": "https://en.wikipedia.org/wiki/Anne_Hathaway"
    },
    {
        "id": "A9",
        "first_name": "Rajkummar",
        "last_name": "Rao",
        "role_type": "ACTOR",
        "profile_description": "Rajkummar Rao, also known as Rajkumar Yadav, is an Indian actor. He has established a career in Hindi cinema and is the recipient of several awards, including a National Film Award, three Filmfare Awards, and an Asia Pacific Screen Award. He is cited in the media as one of the most talented actors of his generation.",
        "profile_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao#/media/File:Rajkummar_Rao_World_Premiere_Newton_Zoopalast_Berlinale_2017_02.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao"
    },
    {
        "id": "A10",
        "first_name": "KayKay",
        "last_name": "Menon",
        "role_type": "ACTOR",
        "profile_description": "Kay Kay Menon is an Indian film, stage and television actor who works predominantly in Hindi cinema, and also in Gujarati, Tamil and Telugu cinema. He has also won the award for best actor for the film Shoonya from Festival of Arab and Asian cinema",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kay_Kay_Menon_at_libas_store.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Kay_Kay_Menon"
    }
];

export default artists;
