const recommendationbtn = document.getElementById("recommendationbtn");
const searchInput = document.getElementById("SearchMovies");
const moviesGrid = document.getElementById("MoviesGrid");

const movies = {
    "The Avengers": {
        image: "images/the_avengers.jpg",
        rating: "8.0",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 23m",
        releaseYear: "2012"
    },
    "The Dark Knight": {
        image: "images/thedarkknight.jpg",
        rating: "9.0",
        genre: "Action, Crime, Drama",
        duration: "2h 32m",
        releaseYear: "2008"
    },
    "Titanic": {
        image: "images/Titanic.jpg",
        rating: "7.9",
        genre: "Drama, Romance",
        duration: "3h 14m",
        releaseYear: "1997"
    },
    "Avatar": {
        image: "images/avatar.jpg",
        rating: "7.9",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 42m",
        releaseYear: "2008"
    },
    "Inception": {
        image: "images/Inception.jpg",
        rating: "8.8",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 28m",
        releaseYear: "2010"
    },
    "Interstellar": {
        image: "images/Interstellar.jpg",
        rating: "8.6",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "2h 49m",
        releaseYear: "2014"
    },
    "Avengers: Age of Ultron": {
        image: "images/avengers2.jpg",
        rating: "7.3",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 21m",
        releaseYear: "2015"
    }, 
    "The Conjuring": {
        image: "images/the_conjuring.jpg",
        rating: "7.5",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2013"
    },
    "Moana": {
    image: "images/moana.jpg",
    rating: "7.6",
    genre: "Animation, Adventure",
    duration: "1h 47m",
    releaseYear: "2016"
},
     "Avatar: The way of water": {
        image: "images/avatar_thewayofwater.jpg",
        rating: "7.5",
        genre: "Action, Adventure, Sci-Fi",
        duration: "3h 12m",
        releaseYear: "2022"
    },
    "Despicable Me": {
        image: "images/despicable_me.jpg",
        rating: "7.6",
        genre: "Animation, Comedy",
        duration: "1h 35m",
        releaseYear: "2010"
    },
    
    "Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994"
    }, 
    "Harry Potter and the Sorcerer's Stone": {
    image: "images/hp1.jpg",
    rating: "7.6",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 32m",
    releaseYear: "2001"
},
"Harry Potter and the Chamber of Secrets": {
    image: "images/hp2.jpg",
    rating: "7.4",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 41m",
    releaseYear: "2002"
},
"Harry Potter and the Prisoner of Azkaban": {
    image: "images/hp3.jpg",
    rating: "7.9",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 22m",
    releaseYear: "2004"
},
"Harry Potter and the Goblet of Fire": {
    image: "images/hp4.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 37m",
    releaseYear: "2005"
},
"Harry Potter and the Order of the Phoenix": {
    image: "images/hp5.jpg",
    rating: "7.5",
    genre: "Action, Adventure, Family",
    duration: "2h 22m",
    releaseYear: "2007"
},
"Harry Potter and the Half-Blood Prince": {
    image: "images/hp6.jpg",
    rating: "7.6",
    genre: "Action, Adventure, Family",
    duration: "2h 33m",
    releaseYear: "2009"
},
"Harry Potter and the Deathly Hallows: Part 1": {
    image: "images/hp7.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 26m",
    releaseYear: "2010"
},
"Harry Potter and the Deathly Hallows: Part 2": {
    image: "images/hp8.jpg",
    rating: "8.1",
    genre: "Action, Adventure, Drama",
    duration: "2h 10m",
    releaseYear: "2011"
},
    "The Dark Knight Rises": {
        image: "images/thedarkknightrises.jpg",
        rating: "8.4",
        genre: "Action, Thriller",
        duration: "2h 32m",
        releaseYear: "2012"
    },
"The Matrix": {
    image: "images/thematrix.jpg",
    rating: "8.7",
    genre: "Action, Sci-Fi",
    duration: "2h 16m",
    releaseYear: "1999"
    },
    "The Godfather": {
        image: "images/the_godfather.jpg",
        rating: "9.2",
        genre: "Crime, Drama",
        duration: "2h 55m",
        releaseYear: "1972"
    }, 
    "The Conjuring 2": {
        image: "images/the_conjuring_2.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 14m",
        releaseYear: "2016"
    },
    "The Matrix Reloaded": {
    image: "images/thematrixreloaded.jpg",
    rating: "7.2",
    genre: "Action, Sci-Fi",
    duration: "2h 18m",
    releaseYear: "2003"
    },
"Despicable Me 2": {
    image: "images/despicable_me_2.jpg",
    rating: "7.3",
    genre: "Animation, Comedy",
    duration: "1h 38m",
    releaseYear: "2013"
},
    "The Godfather II": {
        image: "images/thegodfatherII.jpg",
        rating: "9.0",
        genre: "Crime, Drama",
        duration: "3h 22m",
        releaseYear: "1974"
    }, 
    "Moana 2": {
        image: "images/moana_2.jpg", 
        rating: "6.6",
        genre: "Animation, Adventure",
        duration: "1h 40m",
        releaseYear: "2024"
    },
    "The Conjuring: The Devil Made Me Do It": {
        image: "images/the_conjuring_3.jpg",
        rating: "6.3",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2021"
    },
    "Avengers: Infinity War": {
        image: "images/avengers3.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 29m",
        releaseYear: "2018"
    },
    "Pulp Fiction": {
    image: "images/pulpfiction.jpg",
    rating: "8.9",
    genre: "Crime, Drama",
    duration: "2h 34m",
    releaseYear: "1994"
},
"Despicable Me 3": {
    image: "images/despicable_me_3.jpg",
    rating: "6.2",
    genre: "Animation, Comedy",
    duration: "1h 29m",
    releaseYear: "2017"
},

    "Avengers: Endgame": {
        image: "images/avengers4.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Drama",
        duration: "3h 01m",
        releaseYear: "2019"
    },
    "The Matrix Revolutions": {
    image: "images/thematrixrevolutions.jpg",
    rating: "6.8",
    genre: "Action, Sci-Fi",
    duration: "2h 9m",
    releaseYear: "2003"
},
    "The Godfather III": {
        image: "images/thegodfatherIII.jpg",
        rating: "7.6",
        genre: "Crime, Drama",
        duration: "2h 50m",
        releaseYear: "1990"
    }, 
    "The Matrix Resurrections": {
    image: "images/thematrixresurrections.jpg",
    rating: "5.7",
    genre: "Action, Sci-Fi",
    duration: "2h 28m",
    releaseYear: "2021"
},
"Annabelle": {
    image: "images/annabelle.jpg",
    rating: "7.5",
    genre: "Supernatural, Horror",
    duration: "1h 39m",
    releaseYear: "2014"
    },
    "Tumbbad": {
        image: "images/tumbbad.jpg",
        rating: "8.2",
        genre: "Mythological, Horror",
        duration: "1h 44m",
        releaseYear: "2018"
    },
    "Hereditary": {
        image: "images/hereditary.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 7m",
        releaseYear: "2018"
    },
    "Bhool Bhulaiyaa": {
        image: "images/bhool_bhulaiyaa.jpg",
        rating: "7.5",
        genre: "Horror, Comedy, Thriller",
        duration: "2h 29m",
        releaseYear: "2007"
    },
    "Insidious": {
    image: "images/insidious.jpg",
    rating: "6.8",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2010"
    },
    "Stree": {
        image: "images/stree.jpg",
        rating: "7.5",
        genre: "Horror, Comedy",
        duration: "2h 8m",
        releaseYear: "2018"
    },
    "A Quiet Place": {
        image: "images/A_Quiet_Place.jpg",
        rating: "7.5",
        genre: "Horror, Sci-Fi, Thriller",
        duration: "1h 30m",
        releaseYear: "2018"
    },
    "Train to Busan": {
        image: "images/train_to_busan.jpg",
        rating: "7.6",
        genre: "Horror, Zombie, Thriller",
        duration: "1h 58m",
        releaseYear: "2016"
      },
      "Seoul Station": {
        image: "images/seoul_station.jpg", 
        rating: "6.1",
        genre: "Animation, Horror, Zombie",
        duration: "1h 32m",
        releaseYear: "2016"
      },
      "Peninsula": {
        image: "images/peninsula.jpg", 
        rating: "5.5",
        genre: "Action, Horror, Thriller",
        duration: "1h 56m",
        releaseYear: "2020"
      },
    "The Others": {
        image: "images/the_others.jpg",
        rating: "7.6",
        genre: "Horror Thriller",
        duration: "1h 44m",
        releaseYear: "2001"
    },
    "Munjya (2024)": {
  image: "images/munjya.jpg",
  rating: "6.3",
  genre: "Horror, Comedy",
  duration: "2h 03m",
  releaseYear: "2024"
},
    "The Nun (2018)": {
  image: "images/the_nun.jpg",
  rating: "5.3",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 36m",
  releaseYear: "2018"
},
    "Annabelle: Creation": {
    image: "images/annabelle2.jpg",
    rating: "6.5",
    genre: "Supernatural, Horror",
    duration: "1h 49m",
    releaseYear: "2017"
  },
  "Insidious: Chapter 2": {
    image: "images/insidious2.jpg",
    rating: "6.6",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2013"
  },
  "Insidious: Chapter 3": {
    image: "images/insidious3.jpg",
    rating: "6.1",
    genre: "Supernatural, Horror",
    duration: "1h 37m",
    releaseYear: "2015"
  },
  "Insidious: The Last Key": {
    image: "images/insidious4.jpg",
    rating: "5.7",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2018"
  },
  "Insidious: The Red Door": {
    image: "images/insidious5.jpg",
    rating: "5.6",
    genre: "Supernatural, Horror",
    duration: "1h 47m",
    releaseYear: "2023"
  },
  "Bhool Bhulaiyaa 2": {
    image: "images/bhool_bhulaiyaa_2.jpg",
    rating: "6.5", 
    genre: "Horror, Comedy, Thriller",
    duration: "2h 23m",
    releaseYear: "2022"
  },
  "A Quiet Place Part II": {
    image: "images/A_Quiet_Place_2.jpg", 
    rating: "7.2",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 37m",
    releaseYear: "2020"
  },
  "Stree 2": {
    image: "images/stree_2.jpg", 
    rating: "6.9",
    genre: "Horror, Comedy",
    duration: "2h 29m",
    releaseYear: "2024"
  },

  "Annabelle Comes Home": {
    image: "images/annabelle3.jpg",
    rating: "6.0",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2019"
  },
  "The Nun II (2023)": {
  image: "images/the_nun_2.jpg",
  rating: "5.6",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 50m",
  releaseYear: "2023"
},
  "A Quiet Place: Day One": {
    image: "images/A_Quiet_Place_3.jpg", 
    rating: "6.3",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 40m",
    releaseYear: "2024"
  },
  "The Batman": {
    image: "images/the_batman.jpg",
    rating: "7.9",
    genre: "Action, Mystery",
    duration: "2h 56m",
    releaseYear: "2022"
},
"Shershaah": {
    image: "images/shershaah.jpg",
    rating: "8.4",
    genre: "Action, Biography",
    duration: "2h 15m",
    releaseYear: "2021"
},
"War": {
    image: "images/war.jpg",
    rating: "7.6",
    genre: "Action, Thriller",
    duration: "2h 34m",
    releaseYear: "2019"
},
"Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014"
},
"Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024"
  },
  "Kal Ho Naa Ho": {
        image: "images/kal_ho_naa_ho.jpg",
        rating: "7.9",
        genre: "Romance, Drama",
        duration: "3h 6m",
        releaseYear: "2003"
    },
  "Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024"
  },
  "Bad Newz": {
    image: "images/bad_newz.jpg",
    rating: "6.5",
    genre: "Romance, Comedy",
    duration: "2h 5m",
    releaseYear: "2024"
  },
  "Eternal Sunshine of the Spotless Mind": {
    image: "images/eternal_sunshine.jpg",
    rating: "8.3",
    genre: "Romance, Drama, Sci-Fi",
    duration: "1h 48m",
    releaseYear: "2004"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996"
},
"KGF Chapter 1": {
    image: "images/kgf_1.jpg",
    rating: "8.2",
    genre: "Action, Drama",
    duration: "2h 35m",
    releaseYear: "2018"
},
"KGF Chapter 2": {
    image: "images/kgf_2.jpg",
    rating: "8.3",
    genre: "Action, Drama",
    duration: "2h 48m",
    releaseYear: "2022"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017"
},
"Pathaan": {
    image: "images/pathaan.jpg",
    rating: "7.5",
    genre: "Action, Thriller",
    duration: "2h 26m",
    releaseYear: "2023"
},
"Raazi": {
    image: "images/raazi.jpg",
    rating: "7.8",
    genre: "Action, Thriller",
    duration: "2h 18m",
    releaseYear: "2018"
},
"Kabir Singh": {
    image: "images/kabir_singh.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "2h 55m",
    releaseYear: "2019"
},
"Before Sunrise": {
    image: "images/before_sunrise.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "1995"
},
"Before Sunset": {
    image: "images/before_sunset.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 20m",
    releaseYear: "2004"
},
"Before Midnight": {
    image: "images/before_midnight.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "1h 49m",
    releaseYear: "2013"
},
"Call Me by Your Name": {
    image: "images/call_me_by_your_name.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 12m",
    releaseYear: "2017"
},
"Raees": {
    image: "images/raees.jpg",
    rating: "6.8",
    genre: "Action, Drama, Romance",
    duration: "2h 23m",
    releaseYear: "2017"
},
"Raanjhanaa": {
    image: "images/raanjhanaa.jpg",
    rating: "7.6",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2013"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019"
},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020"
},
"3 Idiots": {
    image: "images/3_idiots.jpg",
    rating: "8.4",
    genre: "Comedy, Drama",
    duration: "2h 50m",
    releaseYear: "2009"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016"
},
"Hera Pheri": {
    image: "images/hera_pheri.jpg",
    rating: "8.2",
    genre: "Comedy",
    duration: "2h 36m",
    releaseYear: "2000"
},
"Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Comedy, Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018"
},
"Munna Bhai M.B.B.S.": {
    image: "images/munna_bhai_mbbs.jpg",
    rating: "8.1",
    genre: "Comedy, Drama",
    duration: "2h 36m",
    releaseYear: "2003"
},
"Welcome": {
image: "images/welcome.jpg",
rating: "7.0",
genre: "Comedy, Drama",
duration: "2h 38m",
releaseYear: "2007"
},
"Welcome Back": {
image: "images/welcome_back.jpg",
rating: "4.3",
genre: "Comedy, Action",
duration: "2h 32m",
releaseYear: "2015"
},
"Andaz Apna Apna": {
    image: "images/andaz_apna_apna.jpg",
    rating: "8.0",
    genre: "Comedy, Romance",
    duration: "2h 41m",
    releaseYear: "1994"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024"
},
"The Grand Budapest Hotel": {
    image: "images/grand_budapest_hotel.jpg",
    rating: "8.1",
    genre: "Comedy, Crime",
    duration: "1h 39m",
    releaseYear: "2014"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014"
},
"The Hangover": {
    image: "images/the_hangover.jpg",
    rating: "7.7",
    genre: "Comedy",
    duration: "1h 40m",
    releaseYear: "2009"
},
"Phir Hera Pheri": {
image: "images/phir_hera_pheri.jpg",
rating: "7.2",
genre: "Comedy, Crime",
duration: "2h 33m",
releaseYear: "2006"
},
"The Intouchables": {
    image: "images/the_intouchables.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "1h 52m",
    releaseYear: "2011"
},
"Glass Onion: A Knives Out Mystery": {
image: "images/glass_onion.jpg",
rating: "7.6",
genre: "Comedy, Crime",
duration: "2h 19m",
releaseYear: "2022"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018"
},
"Dhamaal": {
image: "images/dhamaal.jpg",
rating: "7.4",
genre: "Comedy, Adventure",
duration: "2h 16m",
releaseYear: "2007"
},
"Double Dhamaal": {
image: "images/double_dhamaal.jpg",
rating: "3.9",
genre: "Comedy",
duration: "2h 18m",
releaseYear: "2011"
},
"Total Dhamaal": {
image: "images/total_dhamaal.jpg",
rating: "4.2",
genre: "Comedy, Adventure",
duration: "2h 10m",
releaseYear: "2019"
},
"3 Idiots": {
        image: "images/3_idiots.jpg",
        rating: "8.4",
        genre: "Comedy, Drama",
        duration: "2h 50m",
        releaseYear: "2009"
    },
    "Dangal": {
        image: "images/dangal.jpg",
        rating: "8.4",
        genre: "Drama, Sport",
        duration: "2h 41m",
        releaseYear: "2016"
    },
    "Taare Zameen Par": {
        image: "images/taare_zameen_par.jpg",
        rating: "8.4",
        genre: "Drama, Family",
        duration: "2h 45m",
        releaseYear: "2007"
    },
    "Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 18m",
        releaseYear: "2007"
    },
    "Gangs of Wasseypur": {
    image: "images/gangs_of_wasseypur.jpg",
    rating: "8.2",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012"
},
"Gangs of Wasseypur 2": {
    image: "images/gangs_of_wasseypur_2.jpg",
    rating: "8.3",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012"
},
"Andhadhun (2018)": {
    image: "images/andhadhun.jpg",
    rating: "8.3",
    genre: "Crime, Thriller, Mystery",
    duration: "2h 19m",
    releaseYear: "2018"
},
    "Swades": {
        image: "images/swades.jpg",
        rating: "8.2",
        genre: "Drama",
        duration: "3h 9m",
        releaseYear: "2004"
    },
    "Drishyam": {
        image: "images/drishyam.jpg",
        rating: "8.2",
        genre: "Crime, Drama, Thriller",
        duration: "2h 43m",
        releaseYear: "2015"
    },
    "Drishyam 2": {
    image: "images/drishyam_2.jpg",
    rating: "8.3",
    genre: "Crime, Drama, Thriller",
    duration: "2h 20m",
    releaseYear: "2022"
},
"Super 30 (2019)": {
    image: "images/super_30.jpg",
    rating: "7.9",
    genre: "Biography, Drama",
    duration: "2h 34m",
    releaseYear: "2019"
},
    "Chak De! India": {
        image: "images/chak_de_india.jpg",
        rating: "8.2",
        genre: "Drama, Sport",
        duration: "2h 33m",
        releaseYear: "2007"
    },
   "Zindagi Na Milegi Dobara": {
    image: "images/zindagi_na_milegi_dobara.jpg",
    rating: "8.2",
    genre: "Drama, Adventure, Romance",
    duration: "2h 33m",
    releaseYear: "2011"
    },
    "Sultan (2016)": {
    image: "images/sultan.jpg",
    rating: "7.5",
    genre: "Action, Drama, Sports",
    duration: "2h 50m",
    releaseYear: "2016"
},
    "Hera Pheri": {
        image: "images/hera_pheri.jpg",
        rating: "8.2",
        genre: "Comedy",
        duration: "2h 36m",
        releaseYear: "2000"
    },
    "Andaz Apna Apna": {
        image: "images/andaz_apna_apna.jpg",
        rating: "8.0",
        genre: "Comedy, Romance",
        duration: "2h 41m",
        releaseYear: "1994"
    },
    "Barfi!": {
        image: "images/barfi.jpg",
        rating: "8.1",
        genre: "Comedy, Drama, Romance",
        duration: "2h 31m",
        releaseYear: "2012"
    },
    "Dilwale Dulhania Le Jayenge": {
        image: "images/ddlj.jpg",
        rating: "8.0",
        genre: "Romance, Drama",
        duration: "3h 9m",
        releaseYear: "1995"
    },
    "Tamasha": {
        image: "images/tamasha.jpg",
        rating: "7.8",
        genre: "Drama, Romance",
        duration: "2h 19m",
        releaseYear: "2015"
    },
    "Wake Up Sid": {
        image: "images/wake_up_sid.jpg",
        rating: "7.6",
        genre: "Comedy, Drama, Romance",
        duration: "2h 18m",
        releaseYear: "2009"
    },
    "Titanic": {
    image: "images/titanic.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "3h 14m",
    releaseYear: "1997"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011"
},
"Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 29m",
        releaseYear: "2007"
    },
"Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013"
},
"The Notebook": {
    image: "images/the_notebook.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 3m",
    releaseYear: "2004"
},
"La La Land": {
        image: "images/la_la_land.jpg",
        rating: "8.0",
        genre: "Romance, Music, Drama",
        duration: "2h 8m",
        releaseYear: "2016"
    },
   
"A Walk to Remember": {
    image: "images/a_walk_to_remember.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "2002"
},
"Blue Valentine": {
    image: "images/blue_valentine.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 52m",
    releaseYear: "2010"
},
"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011"
},
"Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004"
},
"Tamasha": {
    image: "images/tamasha.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2015"
},
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009"
    },
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975"
},
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024"
},
"Pride & Prejudice": {
    image: "images/pride_and_prejudice.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 9m",
    releaseYear: "2005"
},
"Despicable Me 4": {
    image: "images/despicable_me_4.jpg",
    rating: "6.2",
    genre: "Animation, Comedy",
    duration: "1h 34m",
    releaseYear: "2024"
},
"My Fault": {
    image: "images/my_fault.jpg",
    rating: "6.3",
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2023"
},

"Your Fault": {
    image: "images/your_fault.jpg",
    rating: "5.2", 
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2024"
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013"
},
"One of Them Days": {
    image: "images/one_of_them_days.jpg",
    rating: "8.2",
    genre: "Comedy, Drama",
    duration: "1h 46m",
    releaseYear: "2025"
},
"The Fall Guy": {
    image: "images/the_fall_guy.jpg",
    rating: "7.6",
    genre: "Action, Comedy",
    duration: "2h 6m",
    releaseYear: "2024"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025"
},
"In the Lost Lands": {
    image: "images/in_the_lost_lands.jpg",
    rating: "7.5",
    genre: "Fantasy, Adventure, Action",
    duration: "1h 45m",
    releaseYear: "2025"
}
};
const actionMovies = {
    "The Batman": {
    image: "images/the_batman.jpg",
    rating: "7.9",
    genre: "Action, Mystery",
    duration: "2h 56m",
    releaseYear: "2022"
},
"Shershaah": {
    image: "images/shershaah.jpg",
    rating: "8.4",
    genre: "Action, Biography",
    duration: "2h 15m",
    releaseYear: "2021"
},
"War": {
    image: "images/war.jpg",
    rating: "7.6",
    genre: "Action, Thriller",
    duration: "2h 34m",
    releaseYear: "2019"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015"
},
"Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011"
},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012"
},
"KGF Chapter 1": {
    image: "images/kgf_1.jpg",
    rating: "8.2",
    genre: "Action, Drama",
    duration: "2h 35m",
    releaseYear: "2018"
},
"KGF Chapter 2": {
    image: "images/kgf_2.jpg",
    rating: "8.3",
    genre: "Action, Drama",
    duration: "2h 48m",
    releaseYear: "2022"
},
"Raazi": {
    image: "images/raazi.jpg",
    rating: "7.8",
    genre: "Action, Thriller",
    duration: "2h 18m",
    releaseYear: "2018"
},
"Pathaan": {
    image: "images/pathaan.jpg",
    rating: "7.5",
    genre: "Action, Thriller",
    duration: "2h 26m",
    releaseYear: "2023"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016"
},
"Deadpool 2": {
    image: "images/deadpool_2.jpg",
    rating: "7.7",
    genre: "Action, Comedy, Sci-Fi",
    duration: "2h 0m",
    releaseYear: "2018"
},
"Deadpool & Wolverine": {
    image: "images/deadpool_3.jpg",
    rating: "7.6",
    genre: "Action, Comedy, Superhero",
    duration: "2h 8m",
    releaseYear: "2024"
},
"Once Upon a Deadpool": {
    image: "images/deadpool_4.jpg",
    rating: "7.5",
    genre: "Action, Comedy, Superhero",
    duration: "1h 57m",
    releaseYear: "2018"
},
};
const horrorMovies = {
    "Annabelle": {
    image: "images/annabelle.jpg",
    rating: "7.5",
    genre: "Supernatural, Horror",
    duration: "1h 39m",
    releaseYear: "2014"
    },
    "Tumbbad": {
        image: "images/tumbbad.jpg",
        rating: "8.2",
        genre: "Mythological, Horror",
        duration: "1h 44m",
        releaseYear: "2018"
    },
    "Insidious": {
    image: "images/insidious.jpg",
    rating: "6.8",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2010"
    },
    "Bhool Bhulaiyaa": {
        image: "images/bhool_bhulaiyaa.jpg",
        rating: "7.5",
        genre: "Horror, Comedy, Thriller",
        duration: "2h 29m",
        releaseYear: "2007"
    },
    "The Conjuring": {
        image: "images/the_conjuring.jpg",
        rating: "7.5",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2013"
    },
    "The Conjuring 2": {
        image: "images/the_conjuring_2.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 14m",
        releaseYear: "2016"
    },
    "The Conjuring: The Devil Made Me Do It": {
        image: "images/the_conjuring_3.jpg",
        rating: "6.3",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2021"
    },
    "The Conjuring: Last Rites": {
        image: "images/the_conjuring_4.jpg",
        rating: "TBA",
        genre: "Supernatural, Horror",
        duration: "TBA",
        releaseYear: "2025"
    },
    "Hereditary": {
        image: "images/hereditary.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 7m",
        releaseYear: "2018"
    },
    "Stree": {
        image: "images/stree.jpg",
        rating: "7.5",
        genre: "Horror, Comedy",
        duration: "2h 8m",
        releaseYear: "2018"
    },
    "Stree 2": {
    image: "images/stree_2.jpg", 
    rating: "6.9",
    genre: "Horror, Comedy",
    duration: "2h 29m",
    releaseYear: "2024"
  },
    "Train to Busan": {
        image: "images/train_to_busan.jpg",
        rating: "7.6",
        genre: "Horror, Zombie, Thriller",
        duration: "1h 58m",
        releaseYear: "2016"
      },
      "Seoul Station": {
        image: "images/seoul_station.jpg", 
        rating: "6.1",
        genre: "Animation, Horror, Zombie",
        duration: "1h 32m",
        releaseYear: "2016"
      },
      "Peninsula": {
        image: "images/peninsula.jpg", 
        rating: "5.5",
        genre: "Action, Horror, Thriller",
        duration: "1h 56m",
        releaseYear: "2020"
      },
    "The Others": {
        image: "images/the_others.jpg",
        rating: "7.6",
        genre: "Horror Thriller",
        duration: "1h 44m",
        releaseYear: "2001"
    },
    "Munjya (2024)": {
  image: "images/munjya.jpg",
  rating: "6.3",
  genre: "Horror, Comedy",
  duration: "2h 03m",
  releaseYear: "2024"
},
    "The Nun (2018)": {
  image: "images/the_nun.jpg",
  rating: "5.3",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 36m",
  releaseYear: "2018"
},
"The Nun II (2023)": {
  image: "images/the_nun_2.jpg",
  rating: "5.6",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 50m",
  releaseYear: "2023"
},
    "Annabelle: Creation": {
    image: "images/annabelle2.jpg",
    rating: "6.5",
    genre: "Supernatural, Horror",
    duration: "1h 49m",
    releaseYear: "2017"
  },
  "Bhool Bhulaiyaa 2": {
    image: "images/bhool_bhulaiyaa_2.jpg",
    rating: "6.5", 
    genre: "Horror, Comedy, Thriller",
    duration: "2h 23m",
    releaseYear: "2022"
  },
  "Insidious: Chapter 2": {
    image: "images/insidious2.jpg",
    rating: "6.6",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2013"
  },
  "Insidious: Chapter 3": {
    image: "images/insidious3.jpg",
    rating: "6.1",
    genre: "Supernatural, Horror",
    duration: "1h 37m",
    releaseYear: "2015"
  },
  "Insidious: The Last Key": {
    image: "images/insidious4.jpg",
    rating: "5.7",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2018"
  },
  "Insidious: The Red Door": {
    image: "images/insidious5.jpg",
    rating: "5.6",
    genre: "Supernatural, Horror",
    duration: "1h 47m",
    releaseYear: "2023"
  },
  "A Quiet Place": {
    image: "images/A_Quiet_Place.jpg",
    rating: "7.5",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 30m",
    releaseYear: "2018"
},
  "A Quiet Place Part II": {
    image: "images/A_Quiet_Place_2.jpg", 
    rating: "7.2",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 37m",
    releaseYear: "2020"
  },
  "A Quiet Place: Day One": {
    image: "images/A_Quiet_Place_3.jpg", 
    rating: "6.3",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 40m",
    releaseYear: "2024"
  },
  "Annabelle Comes Home": {
    image: "images/annabelle3.jpg",
    rating: "6.0",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2019"
  },
};
const comedyMovies = {
    "The Intouchables": {
        image: "images/the_intouchables.jpg",
        rating: "8.5",
        genre: "Comedy, Drama",
        duration: "1h 52m",
        releaseYear: "2011"
    },
    "3 Idiots": {
        image: "images/3_idiots.jpg",
        rating: "8.4",
        genre: "Comedy, Drama",
        duration: "2h 50m",
        releaseYear: "2009"
    },
    "Hera Pheri": {
        image: "images/hera_pheri.jpg",
        rating: "8.2",
        genre: "Comedy",
        duration: "2h 36m",
        releaseYear: "2000"
    },
    "Phir Hera Pheri": {
        image: "images/phir_hera_pheri.jpg",
        rating: "7.2",
        genre: "Comedy, Crime",
        duration: "2h 33m",
        releaseYear: "2006"
    },
    "Munna Bhai M.B.B.S.": {
        image: "images/munna_bhai_mbbs.jpg",
        rating: "8.1",
        genre: "Comedy, Drama",
        duration: "2h 36m",
        releaseYear: "2003"
    },
    "Welcome": {
    image: "images/welcome.jpg",
    rating: "7.0",
    genre: "Comedy, Drama",
    duration: "2h 38m",
    releaseYear: "2007"
},
"Welcome Back": {
    image: "images/welcome_back.jpg",
    rating: "4.3",
    genre: "Comedy, Action",
    duration: "2h 32m",
    releaseYear: "2015"
},
    "Andaz Apna Apna": {
        image: "images/andaz_apna_apna.jpg",
        rating: "8.0",
        genre: "Comedy, Romance",
        duration: "2h 41m",
        releaseYear: "1994"
    },
    "Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016"
},
"Deadpool 2": {
    image: "images/deadpool_2.jpg",
    rating: "7.7",
    genre: "Action, Comedy, Sci-Fi",
    duration: "2h 0m",
    releaseYear: "2018"
},
"Deadpool & Wolverine": {
    image: "images/deadpool_3.jpg",
    rating: "7.6",
    genre: "Action, Comedy, Superhero",
    duration: "2h 8m",
    releaseYear: "2024"
},
"Once Upon a Deadpool": {
    image: "images/deadpool_4.jpg",
    rating: "7.5",
    genre: "Action, Comedy, Superhero",
    duration: "1h 57m",
    releaseYear: "2018"
},
    "The Grand Budapest Hotel": {
        image: "images/grand_budapest_hotel.jpg",
        rating: "8.1",
        genre: "Comedy, Crime",
        duration: "1h 39m",
        releaseYear: "2014"
    },
   "Forrest Gump": {
        image: "images/forrestgump.jpg",
        rating: "8.8",
        genre: "Comedy, Drama, Romance",
        duration: "2h 22m",
        releaseYear: "1994"
    },
    "The Hangover": {
        image: "images/the_hangover.jpg",
        rating: "7.7",
        genre: "Comedy",
        duration: "1h 40m",
        releaseYear: "2009"
    },
    
    "Glass Onion: A Knives Out Mystery": {
    image: "images/glass_onion.jpg",
    rating: "7.6",
    genre: "Comedy, Crime",
    duration: "2h 19m",
    releaseYear: "2022"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014"
},
"Dhamaal": {
    image: "images/dhamaal.jpg",
    rating: "7.4",
    genre: "Comedy, Adventure",
    duration: "2h 16m",
    releaseYear: "2007"
},
"Double Dhamaal": {
    image: "images/double_dhamaal.jpg",
    rating: "3.9",
    genre: "Comedy",
    duration: "2h 18m",
    releaseYear: "2011"
},
"Total Dhamaal": {
    image: "images/total_dhamaal.jpg",
    rating: "4.2",
    genre: "Comedy, Adventure",
    duration: "2h 10m",
    releaseYear: "2019"
},
"Bhool Bhulaiyaa": {
    image: "images/bhool_bhulaiyaa.jpg",
    rating: "7.4",
    genre: "Comedy, Horror, Mystery",
    duration: "2h 31m",
    releaseYear: "2007"
},
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975"
},
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024"
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013"
},
"One of Them Days": {
    image: "images/one_of_them_days.jpg",
    rating: "8.2",
    genre: "Comedy, Drama",
    duration: "1h 46m",
    releaseYear: "2025"
},
"The Fall Guy": {
    image: "images/the_fall_guy.jpg",
    rating: "7.6",
    genre: "Action, Comedy",
    duration: "2h 6m",
    releaseYear: "2024"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025"
},
};
const bollywoodMovies = {
    "Zindagi Na Milegi Dobara": {
    image: "images/zindagi_na_milegi_dobara.jpg",
    rating: "8.2",
    genre: "Drama, Adventure, Romance",
    duration: "2h 33m",
    releaseYear: "2011"
    },
    "3 Idiots": {
        image: "images/3_idiots.jpg",
        rating: "8.4",
        genre: "Comedy, Drama",
        duration: "2h 50m",
        releaseYear: "2009"
    },
    "Dangal": {
        image: "images/dangal.jpg",
        rating: "8.4",
        genre: "Drama, Sport",
        duration: "2h 41m",
        releaseYear: "2016"
    },
    "Taare Zameen Par": {
        image: "images/taare_zameen_par.jpg",
        rating: "8.4",
        genre: "Drama, Family",
        duration: "2h 45m",
        releaseYear: "2007"
    },
    "Gangs of Wasseypur": {
    image: "images/gangs_of_wasseypur.jpg",
    rating: "8.2",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012"
},
"Gangs of Wasseypur 2": {
    image: "images/gangs_of_wasseypur_2.jpg",
    rating: "8.3",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012"
},
"Andhadhun (2018)": {
    image: "images/andhadhun.jpg",
    rating: "8.3",
    genre: "Crime, Thriller, Mystery",
    duration: "2h 19m",
    releaseYear: "2018"
},
    "Swades": {
        image: "images/swades.jpg",
        rating: "8.2",
        genre: "Drama",
        duration: "3h 9m",
        releaseYear: "2004"
    },
    "Drishyam": {
        image: "images/drishyam.jpg",
        rating: "8.2",
        genre: "Crime, Drama, Thriller",
        duration: "2h 43m",
        releaseYear: "2015"
    },
    "Drishyam 2": {
    image: "images/drishyam_2.jpg",
    rating: "8.3",
    genre: "Crime, Drama, Thriller",
    duration: "2h 20m",
    releaseYear: "2022"
},
"Super 30 (2019)": {
    image: "images/super_30.jpg",
    rating: "7.9",
    genre: "Biography, Drama",
    duration: "2h 34m",
    releaseYear: "2019"
},
"Dilwale Dulhania Le Jayenge": {
        image: "images/ddlj.jpg",
        rating: "8.0",
        genre: "Romance, Drama",
        duration: "3h 9m",
        releaseYear: "1995"
    },
     "Hera Pheri": {
        image: "images/hera_pheri.jpg",
        rating: "8.2",
        genre: "Comedy",
        duration: "2h 36m",
        releaseYear: "2000"
    },
    "Phir Hera Pheri": {
        image: "images/phir_hera_pheri.jpg",
        rating: "7.2",
        genre: "Comedy, Crime",
        duration: "2h 33m",
        releaseYear: "2006"
    },
    "Welcome": {
    image: "images/welcome.jpg",
    rating: "7.0",
    genre: "Comedy, Drama",
    duration: "2h 38m",
    releaseYear: "2007"
},
"Welcome Back": {
    image: "images/welcome_back.jpg",
    rating: "4.3",
    genre: "Comedy, Action",
    duration: "2h 32m",
    releaseYear: "2015"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014"
},
"Dhamaal": {
    image: "images/dhamaal.jpg",
    rating: "7.4",
    genre: "Comedy, Adventure",
    duration: "2h 16m",
    releaseYear: "2007"
},
"Double Dhamaal": {
    image: "images/double_dhamaal.jpg",
    rating: "3.9",
    genre: "Comedy",
    duration: "2h 18m",
    releaseYear: "2011"
},
"Total Dhamaal": {
    image: "images/total_dhamaal.jpg",
    rating: "4.2",
    genre: "Comedy, Adventure",
    duration: "2h 10m",
    releaseYear: "2019"
},
"Bhool Bhulaiyaa": {
    image: "images/bhool_bhulaiyaa.jpg",
    rating: "7.4",
    genre: "Comedy, Horror, Mystery",
    duration: "2h 31m",
    releaseYear: "2007"
},
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975"
},
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024"
},
    "Andaz Apna Apna": {
        image: "images/andaz_apna_apna.jpg",
        rating: "8.0",
        genre: "Comedy, Romance",
        duration: "2h 41m",
        releaseYear: "1994"
    },
    "Barfi!": {
        image: "images/barfi.jpg",
        rating: "8.1",
        genre: "Comedy, Drama, Romance",
        duration: "2h 31m",
        releaseYear: "2012"
    },
    "Munna Bhai M.B.B.S.": {
    image: "images/munna_bhai_mbbs.jpg",
    rating: "8.1",
    genre: "Comedy, Drama",
    duration: "2h 36m",
    releaseYear: "2003"
},
    "Tamasha": {
        image: "images/tamasha.jpg",
        rating: "7.8",
        genre: "Drama, Romance",
        duration: "2h 19m",
        releaseYear: "2015"
    },
    "Wake Up Sid": {
        image: "images/wake_up_sid.jpg",
        rating: "7.6",
        genre: "Comedy, Drama, Romance",
        duration: "2h 18m",
        releaseYear: "2009"
    },
    "Bad Newz": {
        image: "images/bad_newz.jpg",
        rating: "6.5",
        genre: "Romance, Comedy",
        duration: "2h 5m",
        releaseYear: "2024"
      },
      "Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024"
  },
  "Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024"
  },
  "Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004"
},"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011"
},"Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013"
},
"Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 18m",
        releaseYear: "2007"
    },
    "Kabir Singh": {
        image: "images/kabir_singh.jpg",
        rating: "7.0",
        genre: "Romance, Drama",
        duration: "2h 55m",
        releaseYear: "2019"
    },
    "Raanjhanaa": {
        image: "images/raanjhanaa.jpg",
        rating: "7.6",
        genre: "Romance, Drama",
        duration: "2h 19m",
        releaseYear: "2013"
    },
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009"
    },
    "Chak De! India": {
        image: "images/chak_de_india.jpg",
        rating: "8.2",
        genre: "Drama, Sport",
        duration: "2h 33m",
        releaseYear: "2007"
    },
    
    "Sultan (2016)": {
    image: "images/sultan.jpg",
    rating: "7.5",
    genre: "Action, Drama, Sports",
    duration: "2h 50m",
    releaseYear: "2016"
},
"Kal Ho Naa Ho": {
        image: "images/kal_ho_naa_ho.jpg",
        rating: "7.9",
        genre: "Romance, Drama",
        duration: "3h 6m",
        releaseYear: "2003"
    },
    "Raees": {
    image: "images/raees.jpg",
    rating: "6.8",
    genre: "Action, Drama, Romance",
    duration: "2h 23m",
    releaseYear: "2017"
}
};
const hollywoodMovies = {
    "The Batman": {
    image: "images/the_batman.jpg",
    rating: "7.9",
    genre: "Action, Mystery",
    duration: "2h 56m",
    releaseYear: "2022"
},
    "Inception": {
        image: "images/Inception.jpg",
        rating: "8.8",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 28m",
        releaseYear: "2010"
    },
    "Pulp Fiction": {
        image: "images/pulpfiction.jpg",
        rating: "8.9",
        genre: "Crime, Drama",
        duration: "2h 34m",
        releaseYear: "1994"
    },
    "Interstellar": {
        image: "images/Interstellar.jpg",
        rating: "8.6",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "2h 49m",
        releaseYear: "2014"
    },
    "The Avengers": {
        image: "images/the_avengers.jpg",
        rating: "8.0",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 23m",
        releaseYear: "2012"
    },
    "Avengers: Age of Ultron": {
        image: "images/avengers2.jpg",
        rating: "7.3",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 21m",
        releaseYear: "2015"
    }, 
    "Avengers: Infinity War": {
        image: "images/avengers3.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 29m",
        releaseYear: "2018"
    },
    "Avengers: Endgame": {
        image: "images/avengers4.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Drama",
        duration: "3h 01m",
        releaseYear: "2019"
    },
    "Moana": {
    image: "images/moana.jpg",
    rating: "7.6",
    genre: "Animation, Adventure, Family",
    duration: "1h 47m",
    releaseYear: "2016"
},
"Moana 2": {
    image: "images/moana_2.jpg", 
    rating: "6.6",
    genre: "Animation, Adventure",
    duration: "1h 40m",
    releaseYear: "2024"
},
    "Avatar": {
        image: "images/avatar.jpg",
        rating: "7.9",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 42m",
        releaseYear: "2008"
    },
    "Avatar: The way of water": {
        image: "images/avatar_thewayofwater.jpg",
        rating: "7.5",
        genre: "Action, Adventure, Sci-Fi",
        duration: "3h 12m",
        releaseYear: "2022"
    },
    "Harry Potter and the Sorcerer's Stone": {
        image: "images/hp1.jpg",
        rating: "7.6",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 32m",
        releaseYear: "2001"
    },
    "Harry Potter and the Chamber of Secrets": {
    image: "images/hp2.jpg",
    rating: "7.4",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 41m",
    releaseYear: "2002"
},
"Harry Potter and the Prisoner of Azkaban": {
    image: "images/hp3.jpg",
    rating: "7.9",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 22m",
    releaseYear: "2004"
},
"Harry Potter and the Goblet of Fire": {
    image: "images/hp4.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 37m",
    releaseYear: "2005"
},
"Harry Potter and the Order of the Phoenix": {
    image: "images/hp5.jpg",
    rating: "7.5",
    genre: "Action, Adventure, Family",
    duration: "2h 22m",
    releaseYear: "2007"
},
"Harry Potter and the Half-Blood Prince": {
    image: "images/hp6.jpg",
    rating: "7.6",
    genre: "Action, Adventure, Family",
    duration: "2h 33m",
    releaseYear: "2009"
},
"Harry Potter and the Deathly Hallows: Part 1": {
    image: "images/hp7.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 26m",
    releaseYear: "2010"
},
"Harry Potter and the Deathly Hallows: Part 2": {
    image: "images/hp8.jpg",
    rating: "8.1",
    genre: "Action, Adventure, Drama",
    duration: "2h 10m",
    releaseYear: "2011"
},
"The Dark Knight": {
    image: "images/thedarkknight.jpg",
    rating: "9.0",
    genre: "Action, Crime, Drama",
    duration: "2h 32m",
    releaseYear: "2008"
},
"The Dark Knight Rises": {
    image: "images/thedarkknightrises.jpg",
    rating: "8.4",
    genre: "Action, Thriller",
    duration: "2h 32m",
    releaseYear: "2012"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014"
},
"Titanic": {
    image: "images/Titanic.jpg",
    rating: "7.9",
    genre: "Drama, Romance",
    duration: "3h 14m",
    releaseYear: "1997"
},
    "Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011"
},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020"
},
    "Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994"
    }, 
    "The Godfather": {
        image: "images/the_godfather.jpg",
        rating: "9.2",
        genre: "Crime, Drama",
        duration: "2h 55m",
        releaseYear: "1972"
    }, 
    "The Godfather II": {
        image: "images/thegodfatherII.jpg",
        rating: "9.0",
        genre: "Crime, Drama",
        duration: "3h 22m",
        releaseYear: "1974"
    }, 
    "The Godfather III": {
        image: "images/thegodfatherIII.jpg",
        rating: "7.6",
        genre: "Crime, Drama",
        duration: "2h 50m",
        releaseYear: "1990"
    },
    "The Matrix": {
    image: "images/thematrix.jpg",
    rating: "8.7",
    genre: "Action, Sci-Fi",
    duration: "2h 16m",
    releaseYear: "1999"
    },
    "The Matrix Reloaded": {
    image: "images/thematrixreloaded.jpg",
    rating: "7.2",
    genre: "Action, Sci-Fi",
    duration: "2h 18m",
    releaseYear: "2003"
    },
    "The Matrix Revolutions": {
    image: "images/thematrixrevolutions.jpg",
    rating: "6.8",
    genre: "Action, Sci-Fi",
    duration: "2h 9m",
    releaseYear: "2003"
},
    "The Matrix Resurrections": {
    image: "images/thematrixresurrections.jpg",
    rating: "5.7",
    genre: "Action, Sci-Fi",
    duration: "2h 28m",
    releaseYear: "2021"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018"
},
"Eternal Sunshine of the Spotless Mind": {
    image: "images/eternal_sunshine.jpg",
    rating: "8.3",
    genre: "Romance, Drama, Sci-Fi",
    duration: "1h 48m",
    releaseYear: "2004"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020"
},
"The Grand Budapest Hotel": {
    image: "images/grand_budapest_hotel.jpg",
    rating: "8.1",
    genre: "Comedy, Crime",
    duration: "1h 39m",
    releaseYear: "2014"
},
"Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Comedy, Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994"
},
"Despicable Me": {
    image: "images/despicable_me.jpg",
    rating: "7.6",
    genre: "Animation, Comedy, Family",
    duration: "1h 35m",
    releaseYear: "2010"
},

"Despicable Me 2": {
    image: "images/despicable_me_2.jpg",
    rating: "7.3",
    genre: "Animation, Comedy, Family",
    duration: "1h 38m",
    releaseYear: "2013"
},

"Despicable Me 3": {
    image: "images/despicable_me_3.jpg",
    rating: "6.2",
    genre: "Animation, Comedy, Family",
    duration: "1h 29m",
    releaseYear: "2017"
},

"Despicable Me 4": {
    image: "images/despicable_me_4.jpg", 
    rating: "6.2", 
    genre: "Animation, Comedy, Family",
    duration: "1h 34m",
    releaseYear: "2024"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015"
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025"
},
"In the Lost Lands": {
    image: "images/in_the_lost_lands.jpg",
    rating: "7.5",
    genre: "Fantasy, Adventure, Action",
    duration: "1h 45m",
    releaseYear: "2025"
},
};
const romanticMovies = {
   "Anora": {
    image: "images/anora.jpg",
    rating: "8.0",
    genre: "Romance, Comedy, Drama",
    duration: "2h 19m",
    releaseYear: "2024"
},
    "Titanic": {
    image: "images/titanic.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "3h 14m",
    releaseYear: "1997"
},
"Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 29m",
        releaseYear: "2007"
    },
"Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013"
},
"La La Land": {
        image: "images/la_la_land.jpg",
        rating: "8.0",
        genre: "Romance, Music, Drama",
        duration: "2h 8m",
        releaseYear: "2016"
    },
   
"A Walk to Remember": {
    image: "images/a_walk_to_remember.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "2002"
},
"My Fault": {
    image: "images/my_fault.jpg",
    rating: "6.3",
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2023"
},

"Your Fault": {
    image: "images/your_fault.jpg",
    rating: "5.2", 
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2024"
},
"Blue Valentine": {
    image: "images/blue_valentine.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 52m",
    releaseYear: "2010"
},
"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011"
},
"Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004"
},
"Tamasha": {
    image: "images/tamasha.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2015"
},
    "Kabir Singh": {
    image: "images/kabir_singh.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "2h 55m",
    releaseYear: "2019"
},
"Before Sunrise": {
    image: "images/before_sunrise.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "1995"
},
"Before Sunset": {
    image: "images/before_sunset.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 20m",
    releaseYear: "2004"
},
"Before Midnight": {
    image: "images/before_midnight.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "1h 49m",
    releaseYear: "2013"
},
"Call Me by Your Name": {
    image: "images/call_me_by_your_name.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 12m",
    releaseYear: "2017"
},
"Raanjhanaa": {
    image: "images/raanjhanaa.jpg",
    rating: "7.6",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2013"
},
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009"
    },
    "Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024"
  },
  "Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024"
  },
  "Bad Newz": {
    image: "images/bad_newz.jpg",
    rating: "6.5",
    genre: "Romance, Comedy",
    duration: "2h 5m",
    releaseYear: "2024"
  },
"Pride & Prejudice": {
    image: "images/pride_and_prejudice.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 9m",
    releaseYear: "2005"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014"
},
"The Notebook": {
    image: "images/the_notebook.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 3m",
    releaseYear: "2004"
},
};
// Function to display a set of movies
function displayMovies(movieList, movieCollection = movies) {
    moviesGrid.innerHTML = ""; // Clear existing

    movieList.forEach(movieKey => {
        const movie = movieCollection[movieKey];

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${movie.image}" class="card-image" alt="${movieKey}">
            </div>
            <div class="movie-details">
                <p class="title">${movieKey}</p> 
                <p>Genre: ${movie.genre}</p>
                <p>Duration: ${movie.duration}</p>
                <p>Release Year: ${movie.releaseYear}</p>
            </div>
            <div class="ratings">
                    <span class="star">&#9733;</span>${movie.rating}
                </div>
        `;

        moviesGrid.appendChild(card);
    });
}

//  Show all movies on front page load
window.onload = () => {
    displayMovies(Object.keys(movies));
};

//  Filter movie on search
recommendationbtn.addEventListener("click", () => {
    const input = searchInput.value.trim().toLowerCase();

    if(input === "action"){
        displayMovies(Object.keys(actionMovies), actionMovies);
        return;
    }
    if(input === "horror"){
        displayMovies(Object.keys(horrorMovies), horrorMovies);
        return;
    }
    if(input === "comedy"){
        displayMovies(Object.keys(comedyMovies), comedyMovies);
        return;
    }
    if(input === "bollywood"){
        displayMovies(Object.keys(bollywoodMovies), bollywoodMovies);
        return;
    }
    if(input === "hollywood"){
        displayMovies(Object.keys(hollywoodMovies), hollywoodMovies);
        return;
    }
    if(input === "romance/rom-com"){
        displayMovies(Object.keys(romanticMovies), romanticMovies);
        return;
    }
    const matchedMovies = Object.keys(movies).filter(
        key => key.toLowerCase().includes(input)
    );

    if (matchedMovies.length > 0) {
        displayMovies(matchedMovies);
    } else {
        moviesGrid.innerHTML = `<p style="color: white; font-weight: bold;">No movie found with name "${input}".</p>`;
    }
});

// show the front page(display all movies) if search input is empty again
function showAllMovies() {
    displayMovies(Object.keys(movies));
}

searchInput.addEventListener("input", () => {
    const input = searchInput.value.trim().toLowerCase();
    if (input === "") {
        showAllMovies();
    }
});