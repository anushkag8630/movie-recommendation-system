const recommendationbtn = document.getElementById("recommendationbtn");
const searchInput = document.getElementById("SearchMovies");
const moviesGrid = document.getElementById("MoviesGrid");

const movies = {
    "The Avengers": {
        image: "images/the_avengers.jpg",
        rating: "8.0",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 23m",
        releaseYear: "2012",
        trailer: "https://youtu.be/eOrNdBpGMv8?si=S8UlgbuuiXqMCEAz"
    },
    "The Dark Knight": {
        image: "images/thedarkknight.jpg",
        rating: "9.0",
        genre: "Action, Crime, Drama",
        duration: "2h 32m",
        releaseYear: "2008",
        trailer: "https://youtu.be/EXeTwQWrcwY?si=h1Yhx9zsGKdrCO-5"
    },
    "Titanic": {
        image: "images/titanic.jpg",
        rating: "7.9",
        genre: "Romance, Drama",
        duration: "3h 14m",
        releaseYear: "1997",
        trailer: "https://youtu.be/kVrqfYjkTdQ?si=qaKIB3o7y6NOxldz"
    },
    "Avatar": {
        image: "images/avatar.jpg",
        rating: "7.9",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 42m",
        releaseYear: "2008",
        trailer: "https://youtu.be/5PSNL1qE6VY?si=kLvZCR61fxB8c3b0"
    },
    "Inception": {
        image: "images/Inception.jpg",
        rating: "8.8",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 28m",
        releaseYear: "2010",
        trailer: "https://youtu.be/YoHD9XEInc0?si=-oZhNN3ITr7jarHS"
    },
    "Interstellar": {
        image: "images/Interstellar.jpg",
        rating: "8.6",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "2h 49m",
        releaseYear: "2014",
        trailer: "https://youtu.be/zSWdZVtXT7E?si=oHkEJ5Fet5XekNi6"
    },
    "Avengers: Age of Ultron": {
        image: "images/avengers2.jpg",
        rating: "7.3",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 21m",
        releaseYear: "2015",
        trailer: "https://youtu.be/tmeOjFno6Do?si=g8cKuwtpfHGH_Bfg"
    }, 
    "The Conjuring": {
        image: "images/the_conjuring.jpg",
        rating: "7.5",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2013",
        trailer: "https://youtu.be/ejMMn0t58Lc?si=HpgvwoczNM50Uvlc"
    },
    "Moana": {
    image: "images/moana.jpg",
    rating: "7.6",
    genre: "Animation, Adventure",
    duration: "1h 47m",
    releaseYear: "2016",
    trailer: "https://youtu.be/LKFuXETZUsI?si=qpK_rQwBqEQFmkfZ"
},
     "Avatar: The way of water": {
        image: "images/avatar_thewayofwater.jpg",
        rating: "7.5",
        genre: "Action, Adventure, Sci-Fi",
        duration: "3h 12m",
        releaseYear: "2022",
        trailer: "https://youtu.be/d9MyW72ELq0?si=ixSh95He0VlXIRyD"
    },
    "Despicable Me": {
        image: "images/despicable_me.jpg",
        rating: "7.6",
        genre: "Animation, Comedy",
        duration: "1h 35m",
        releaseYear: "2010",
        trailer: "https://youtu.be/zzCZ1W_CUoI?si=ncSWOO3TuRCZZIl_"
    },
    
    "Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994",
    trailer: "https://youtu.be/bLvqoHBptjg?si=Hnu0fNf3x5n9C_ll"
    }, 
    "Harry Potter and the Sorcerer's Stone": {
    image: "images/hp1.jpg",
    rating: "7.6",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 32m",
    releaseYear: "2001",
    trailer: "https://youtu.be/VyHV0BRtdxo?si=RuvcN3hh0m2PrkH-"
},
"Harry Potter and the Chamber of Secrets": {
    image: "images/hp2.jpg",
    rating: "7.4",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 41m",
    releaseYear: "2002",
    trailer: "https://youtu.be/nE11U5iBnH0?si=BffLzRoJDh29N8eK"
},
"Harry Potter and the Prisoner of Azkaban": {
    image: "images/hp3.jpg",
    rating: "7.9",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 22m",
    releaseYear: "2004",
    trailer: "https://youtu.be/VwErvYgoH70?si=UNG9VnW3QKUGE6ZR"
},
"Harry Potter and the Goblet of Fire": {
    image: "images/hp4.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 37m",
    releaseYear: "2005",
    trailer: "https://youtu.be/80kuiBq95So?si=fK54GbFarQfoRgBg"
},
"Harry Potter and the Order of the Phoenix": {
    image: "images/hp5.jpg",
    rating: "7.5",
    genre: "Action, Adventure, Family",
    duration: "2h 22m",
    releaseYear: "2007",
    trailer: "https://youtu.be/LLAaW1EgyY8?si=P5Fs2FQhvneiqdgo"
},
"Harry Potter and the Half-Blood Prince": {
    image: "images/hp6.jpg",
    rating: "7.6",
    genre: "Action, Adventure, Family",
    duration: "2h 33m",
    releaseYear: "2009",
    trailer: "https://youtu.be/tAiy66Xrsz4?si=G8NIZfHgGaHXEYVp"
},
"Harry Potter and the Deathly Hallows: Part 1": {
    image: "images/hp7.jpg",
    rating: "7.7",
    genre: "Adventure, Family, Fantasy",
    duration: "2h 26m",
    releaseYear: "2010",
    trailer: "https://youtu.be/Su1LOpjvdZ4?si=PTF3dtTmn-I5lPIk"
},
"Harry Potter and the Deathly Hallows: Part 2": {
    image: "images/hp8.jpg",
    rating: "8.1",
    genre: "Action, Adventure, Drama",
    duration: "2h 10m",
    releaseYear: "2011",
    trailer: "https://youtu.be/mObK5XD8udk?si=icJLB8m7M6MMHlu_"
},
    "The Dark Knight Rises": {
        image: "images/thedarkknightrises.jpg",
        rating: "8.4",
        genre: "Action, Thriller",
        duration: "2h 32m",
        releaseYear: "2012",
        trailer: "https://youtu.be/GokKUqLcvD8?si=NXqdOh_UjWxXAQfY"
    },
"The Matrix": {
    image: "images/thematrix.jpg",
    rating: "8.7",
    genre: "Action, Sci-Fi",
    duration: "2h 16m",
    releaseYear: "1999",
    trailer: "https://youtu.be/vKQi3bBA1y8?si=-nSvERMZ295rZ6_J"
    },
    "The Godfather": {
        image: "images/the_godfather.jpg",
        rating: "9.2",
        genre: "Crime, Drama",
        duration: "2h 55m",
        releaseYear: "1972",
        trailer: "https://youtu.be/UaVTIH8mujA?si=WW-n3ShQQF48HQdT"
    }, 
    "The Conjuring 2": {
        image: "images/the_conjuring_2.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 14m",
        releaseYear: "2016",
        trailer: "https://youtu.be/VFsmuRPClr4?si=d9ofaAQ0JBdTumzW"
    },
    "The Matrix Reloaded": {
    image: "images/thematrixreloaded.jpg",
    rating: "7.2",
    genre: "Action, Sci-Fi",
    duration: "2h 18m",
    releaseYear: "2003",
    trailer: "https://youtu.be/kYzz0FSgpSU?si=m4LlPmwoEdH0OwC7"
    },
"Despicable Me 2": {
    image: "images/despicable_me_2.jpg",
    rating: "7.3",
    genre: "Animation, Comedy",
    duration: "1h 38m",
    releaseYear: "2013",
    trailer: "https://youtu.be/yM9sKpQOuEw?si=K858qAZ_luHPJZcz"
},
    "The Godfather II": {
        image: "images/thegodfatherII.jpg",
        rating: "9.0",
        genre: "Crime, Drama",
        duration: "3h 22m",
        releaseYear: "1974",
        trailer: "https://youtu.be/9O1Iy9od7-A?si=rL04oh_HUHECqh6I"
    }, 
    "Moana 2": {
        image: "images/moana_2.jpg", 
        rating: "6.6",
        genre: "Animation, Adventure",
        duration: "1h 40m",
        releaseYear: "2024",
        trailer: "https://youtu.be/hDZ7y8RP5HE?si=tl4cV-0yE562VeSr"
    },
    "The Conjuring: The Devil Made Me Do It": {
        image: "images/the_conjuring_3.jpg",
        rating: "6.3",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2021",
        trailer: "https://youtu.be/h9Q4zZS2v1k?si=YE3juZ9-Oyx022rK"
    },
    "Avengers: Infinity War": {
        image: "images/avengers3.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 29m",
        releaseYear: "2018",
        trailer: "https://youtu.be/6ZfuNTqbHE8?si=JmwaAExaH_UV6K7V"
    },
    "Pulp Fiction": {
    image: "images/pulpfiction.jpg",
    rating: "8.9",
    genre: "Crime, Drama",
    duration: "2h 34m",
    releaseYear: "1994",
    trailer: "https://youtu.be/s7EdQ4FqbhY?si=9IIPWct8P7SRcnKc"
},
"Despicable Me 3": {
    image: "images/despicable_me_3.jpg",
    rating: "6.2",
    genre: "Animation, Comedy",
    duration: "1h 29m",
    releaseYear: "2017",
    trailer: "https://youtu.be/6DBi41reeF0?si=xD4p_7tFGGPX3TE6"
},

    "Avengers: Endgame": {
        image: "images/avengers4.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Drama",
        duration: "3h 01m",
        releaseYear: "2019",
        trailer: "https://youtu.be/TcMBFSGVi1c?si=xBGAD5ubTBkVG99c"
    },
    "The Matrix Revolutions": {
    image: "images/thematrixrevolutions.jpg",
    rating: "6.8",
    genre: "Action, Sci-Fi",
    duration: "2h 9m",
    releaseYear: "2003",
    trailer: "https://youtu.be/hMbexEPAOQI?si=qo5qLEdHXU2rSPSG"
},
    "The Godfather III": {
        image: "images/thegodfatherIII.jpg",
        rating: "7.6",
        genre: "Crime, Drama",
        duration: "2h 50m",
        releaseYear: "1990",
        trailer: "https://youtu.be/UUkG37KSWf0?si=mV40b3KiSyahq_Ls"
    }, 
    "The Matrix Resurrections": {
    image: "images/thematrixresurrections.jpg",
    rating: "5.7",
    genre: "Action, Sci-Fi",
    duration: "2h 28m",
    releaseYear: "2021",
    trailer: "https://youtu.be/9ix7TUGVYIo?si=EJhYB2K4COy4I0Tn"
},
"Annabelle": {
    image: "images/annabelle.jpg",
    rating: "7.5",
    genre: "Supernatural, Horror",
    duration: "1h 39m",
    releaseYear: "2014",
    trailer: "https://youtu.be/paFgQNPGlsg?si=KrNNzIWwfE4kMraH"
    },
    "Tumbbad": {
        image: "images/tumbbad.jpg",
        rating: "8.2",
        genre: "Mythological, Horror",
        duration: "1h 44m",
        releaseYear: "2018",
        trailer: "https://youtu.be/YGIcZrUBY0k?si=QrtgYwDl70xz5fLw"
    },
    "Hereditary": {
        image: "images/hereditary.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 7m",
        releaseYear: "2018",
        trailer: "https://youtu.be/V6wWKNij_1M?si=BPvI8uJbUFEp-bax"
    },
    "Bhool Bhulaiyaa": {
        image: "images/bhool_bhulaiyaa.jpg",
        rating: "7.5",
        genre: "Horror, Comedy, Thriller",
        duration: "2h 29m",
        releaseYear: "2007",
        trailer: "https://youtu.be/ss-7iGf1xE8?si=FSLGSWSaGdJQ_LOX"
    },
    "Insidious": {
    image: "images/insidious.jpg",
    rating: "6.8",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2010",
    trailer: "https://youtu.be/62rpZcMYa0A?si=p9Ail-0zOxo11u-d"
    },
    "Stree": {
        image: "images/stree.jpg",
        rating: "7.5",
        genre: "Horror, Comedy",
        duration: "2h 8m",
        releaseYear: "2018",
        trailer: "https://youtu.be/gzeaGcLLl_A?si=MO7f8zghJF6CvFYM"
    },
    "A Quiet Place": {
        image: "images/A_Quiet_Place.jpg",
        rating: "7.5",
        genre: "Horror, Sci-Fi, Thriller",
        duration: "1h 30m",
        releaseYear: "2018",
        trailer: "https://youtu.be/WR7cc5t7tv8?si=SmKg8nSnlDqM7ejR"
    },
    "Train to Busan": {
        image: "images/train_to_busan.jpg",
        rating: "7.6",
        genre: "Horror, Zombie, Thriller",
        duration: "1h 58m",
        releaseYear: "2016",
        trailer: "https://youtu.be/1ovgxN2VWNc?si=58dAlWv0Ltd9PTKL"
      },
      "Seoul Station": {
        image: "images/seoul_station.jpg", 
        rating: "6.1",
        genre: "Animation, Horror, Zombie",
        duration: "1h 32m",
        releaseYear: "2016",
        trailer: "https://youtu.be/WZZ9QHJD2_U?si=Ux_gDjOmCNB179ZM"
      },
      "Peninsula": {
        image: "images/peninsula.jpg", 
        rating: "5.5",
        genre: "Action, Horror, Thriller",
        duration: "1h 56m",
        releaseYear: "2020",
        trailer: "https://youtu.be/yVucSRLLeIM?si=nJf7CIxcHfNTV0XV"
      },
    "The Others": {
        image: "images/the_others.jpg",
        rating: "7.6",
        genre: "Horror Thriller",
        duration: "1h 44m",
        releaseYear: "2001",
        trailer: "https://youtu.be/C7pKqaPtMiA?si=Ztk6C6HWAXFQZVZr"
    },
    "Munjya (2024)": {
  image: "images/munjya.jpg",
  rating: "6.3",
  genre: "Horror, Comedy",
  duration: "2h 03m",
  releaseYear: "2024",
  trailer: "https://youtu.be/8X3uF80H5LU?si=ukUBURq6AfjqJeS0"
},
    "The Nun (2018)": {
  image: "images/the_nun.jpg",
  rating: "5.3",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 36m",
  releaseYear: "2018",
  trailer: "https://youtu.be/pzD9zGcUNrw?si=rsvM9cz5NoSSL3oT"
},
    "Annabelle: Creation": {
    image: "images/annabelle2.jpg",
    rating: "6.5",
    genre: "Supernatural, Horror",
    duration: "1h 49m",
    releaseYear: "2017",
    trailer: "https://youtu.be/KisPhy7T__Q?si=t6inqA7ZwXX4QxtA"
  },
  "Insidious: Chapter 2": {
    image: "images/insidious2.jpg",
    rating: "6.6",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2013",
    trailer: "https://youtu.be/fBbi4NeebAk?si=Dng-4EjBeiV2Jfm-"
  },
  "Insidious: Chapter 3": {
    image: "images/insidious3.jpg",
    rating: "6.1",
    genre: "Supernatural, Horror",
    duration: "1h 37m",
    releaseYear: "2015",
    trailer: "https://youtu.be/3HxEXnVSr1w?si=K3kR6G3CMXjWb92n"
  },
  "Insidious: The Last Key": {
    image: "images/insidious4.jpg",
    rating: "5.7",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2018",
    trailer: "https://youtu.be/acQyrwQyCOk?si=bIvLfYO3-o3shY_d"
  },
  "Insidious: The Red Door": {
    image: "images/insidious5.jpg",
    rating: "5.6",
    genre: "Supernatural, Horror",
    duration: "1h 47m",
    releaseYear: "2023",
    trailer: "https://youtu.be/ZuQuOnYnr3Q?si=j7cprx7ija-wTuuu"
  },
  "Bhool Bhulaiyaa 2": {
    image: "images/bhool_bhulaiyaa_2.jpg",
    rating: "6.5", 
    genre: "Horror, Comedy, Thriller",
    duration: "2h 23m",
    releaseYear: "2022",
    trailer: "https://youtu.be/P2KRKxAb2ek?si=ODGfwXr3imPJBH-8"
  },
  "A Quiet Place Part II": {
    image: "images/A_Quiet_Place_2.jpg", 
    rating: "7.2",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 37m",
    releaseYear: "2020",
    trailer: "https://youtu.be/BpdDN9d9Jio?si=WiudYfMiYHNh8Ole"
  },
  "Stree 2": {
    image: "images/stree_2.jpg", 
    rating: "6.9",
    genre: "Horror, Comedy",
    duration: "2h 29m",
    releaseYear: "2024",
    trailer: "https://youtu.be/VlvOgk5BHS4?si=TYHc9--YunL2G-zw"
  },

  "Annabelle Comes Home": {
    image: "images/annabelle3.jpg",
    rating: "6.0",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2019",
    trailer: "https://youtu.be/bCxm7cTpBAs?si=RSHVmk0KrZ-qBU09"
  },
  "The Nun II (2023)": {
  image: "images/the_nun_2.jpg",
  rating: "5.6",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 50m",
  releaseYear: "2023",
  trailer: "https://youtu.be/QF-oyCwaArU?si=8NWvPqU2kx4QL0DJ"
},
  "A Quiet Place: Day One": {
    image: "images/A_Quiet_Place_3.jpg", 
    rating: "6.3",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 40m",
    releaseYear: "2024",
    trailer: "https://youtu.be/YPY7J-flzE8?si=QbLfDUv15U5kMr3X"
  },
  "The Batman": {
    image: "images/the_batman.jpg",
    rating: "7.9",
    genre: "Action, Mystery",
    duration: "2h 56m",
    releaseYear: "2022",
    trailer: "https://youtu.be/mqqft2x_Aa4?si=v8ROE4KY1DvXLZQK"
},
"Shershaah": {
    image: "images/shershaah.jpg",
    rating: "8.4",
    genre: "Action, Biography",
    duration: "2h 15m",
    releaseYear: "2021",
    trailer: "https://youtu.be/Q0FTXnefVBA?si=2WMe8XlbEQuer7cT"
},
"War": {
    image: "images/war.jpg",
    rating: "7.6",
    genre: "Action, Thriller",
    duration: "2h 34m",
    releaseYear: "2019",
    trailer: "https://youtu.be/tQ0mzXRk-oM?si=btwXIQbbaqmlc7M0"
},
"Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011",
    trailer: "https://youtu.be/JerVrbLldXw?si=zAW1OEF-XCrmcSyH"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014",
    trailer: "https://youtu.be/C0BMx-qxsP4?si=jAmhyqPna4SSC_jN"
},
"Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024",
    trailer: "https://youtu.be/6RT3cB3T74w?si=s7osJq0-Jnt5V_R38"
  },
  "Kal Ho Naa Ho": {
        image: "images/kal_ho_naa_ho.jpg",
        rating: "7.9",
        genre: "Romance, Drama",
        duration: "3h 6m",
        releaseYear: "2003",
        trailer: "https://youtu.be/tVMAQAsjsOU?si=MNqOebkpl9MGP7cQ"
    },
  "Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024",
    trailer: "https://youtu.be/bXTsJKcx_fc?si=I7M9sykwozt0UUC-"
  },
  "Bad Newz": {
    image: "images/bad_newz.jpg",
    rating: "6.5",
    genre: "Romance, Comedy",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/uV50UfcIT68?si=gkOWlGhej4mBw7z4"
  },
  "Eternal Sunshine of the Spotless Mind": {
    image: "images/eternal_sunshine.jpg",
    rating: "8.3",
    genre: "Romance, Drama, Sci-Fi",
    duration: "1h 48m",
    releaseYear: "2004",
    trailer: "https://youtu.be/07-QBnEkgXU?si=OFrg0raFjq6H_Kwp"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011",
    trailer: "https://youtu.be/zVuuooZqVaU?si=CPD3fGcNixkwQbdH"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Eh993__rOxA?si=F1nqm_cW6unZdaIT"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014",
    trailer: "https://youtu.be/9ItBvH5J6ss?si=FWo_nzTNIBeCSCRa"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996",
    trailer: "https://youtu.be/fsQgc9pCyDU?si=ZVOu2w1tmYF8MFtU"
},
"KGF Chapter 1": {
    image: "images/kgf_1.jpg",
    rating: "8.2",
    genre: "Action, Drama",
    duration: "2h 35m",
    releaseYear: "2018",
    trailer: "https://youtu.be/-KfsY-qwBS0?si=x2AwELtkSXXQ17S0"
},
"KGF Chapter 2": {
    image: "images/kgf_2.jpg",
    rating: "8.3",
    genre: "Action, Drama",
    duration: "2h 48m",
    releaseYear: "2022",
    trailer: "https://youtu.be/Qah9sSIXJqk?si=w1VteJQwdCUSqs1B"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017",
    trailer: "https://youtu.be/XGk2EfbD_Ps?si=t7mZjpOWIGga6mbz"
},
"Pathaan": {
    image: "images/pathaan.jpg",
    rating: "7.5",
    genre: "Action, Thriller",
    duration: "2h 26m",
    releaseYear: "2023",
    trailer: "https://youtu.be/4xl9KfUg8Lc?si=k6xXndaTBGeVYExo"
},
"Raazi": {
    image: "images/raazi.jpg",
    rating: "7.8",
    genre: "Action, Thriller",
    duration: "2h 18m",
    releaseYear: "2018",
    trailer: "https://youtu.be/YjMSttRJrhA?si=86iGELhjN0mM7sED"
},
"Kabir Singh": {
    image: "images/kabir_singh.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "2h 55m",
    releaseYear: "2019",
    trailer: "https://youtu.be/RiANSSgCuJk?si=mLVx8aRqUcvxGqn_"
},
"Before Sunrise": {
    image: "images/before_sunrise.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "1995",
    trailer: "https://youtu.be/6MUcuqbGTxc?si=uUorEzOcgwrl8mbn"
},
"Before Sunset": {
    image: "images/before_sunset.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 20m",
    releaseYear: "2004",
    trailer: "https://youtu.be/oI3UuneLcyU?si=vkoJZbzR9SkhbgBi"
},
"Before Midnight": {
    image: "images/before_midnight.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "1h 49m",
    releaseYear: "2013",
    trailer: "https://youtu.be/Kv6JWoVKlGY?si=iY1h1dR8Ypnw262s"
},
"Call Me by Your Name": {
    image: "images/call_me_by_your_name.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 12m",
    releaseYear: "2017",
    trailer: "https://youtu.be/Z9AYPxH5NTM?si=KwQYEoAqSYRDxxRt"
},
"Raees": {
    image: "images/raees.jpg",
    rating: "6.8",
    genre: "Action, Drama, Romance",
    duration: "2h 23m",
    releaseYear: "2017",
    trailer: "https://youtu.be/J7_1MU3gDk0?si=U8p0Hl4CEOrI4dR3"
},
"Raanjhanaa": {
    image: "images/raanjhanaa.jpg",
    rating: "7.6",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2013",
    trailer: "https://youtu.be/ER9vmhxFucg?si=sUrLWgnYLv_0_egr"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000",
    trailer: "https://youtu.be/hSPtsCQq52k?si=MtH5Jbyz5PaIfy5z"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019",
    trailer: "https://youtu.be/M7XM597XO94?si=7jW03jvu3RSDZePH"
},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014",
    trailer: "https://youtu.be/7SlILk2WMTI?si=5WrkqhvG3gKVH6b6"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012",
    trailer: "https://youtu.be/6kw1UVovByw?si=bmZoNvpx_p_bcLXz"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015",
    trailer: "https://youtu.be/hEJnMQG9ev8?si=amnTC58auePdNgdq"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023",
    trailer: "https://youtu.be/qEVUtrk8_B4?si=q3f--wHqZOKzlAmH"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006",
    trailer: "https://youtu.be/rl2bysiyltg?si=iyUAw0_QeJSlrQFY"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011",
    trailer: "https://youtu.be/EDGYVFZxsXQ?si=IFbub_FGJSEZLJ_h"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015",
    trailer: "https://youtu.be/gOW_azQbOjw?si=WQezodotJaW1sQI8"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018",
    trailer: "https://youtu.be/wb49-oV0F78?si=jOwZmRDgHvPOzLQi"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016",
    trailer: "https://youtu.be/dKrVegVI0Us?si=aLfDhWaLxbekuRcf"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020",
    trailer: "https://youtu.be/LdOM0x0XDMo?si=7n2RLQ7BscVJMAuK"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020",
    trailer: "https://youtu.be/1pHDWnXmK7Y?si=RBXcT5Ki83TuJEV0"
},
"3 Idiots": {
    image: "images/3_idiots.jpg",
    rating: "8.4",
    genre: "Comedy, Drama",
    duration: "2h 50m",
    releaseYear: "2009",
    trailer: "https://youtu.be/xvszmNXdM4w?si=EmRNSxs5wCX3jryU"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Xithigfg7dA?si=byukaiy1attvK6G-"
},
"Hera Pheri": {
    image: "images/hera_pheri.jpg",
    rating: "8.2",
    genre: "Comedy",
    duration: "2h 36m",
    releaseYear: "2000",
    trailer: "https://youtu.be/m1zMmVwWr-M?si=Oiqn3QbSs-4QucpI"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018",
trailer: "https://youtu.be/D86RtevtfrA?si=v8oe3qc3wIN0r2FD"
},
"Munna Bhai M.B.B.S.": {
    image: "images/munna_bhai_mbbs.jpg",
    rating: "8.1",
    genre: "Comedy, Drama",
    duration: "2h 36m",
    releaseYear: "2003",
    trailer: "https://youtu.be/6lCGvu-hwX4?si=RxuD5RvT4QfiPfyG"
},
"Welcome": {
image: "images/welcome.jpg",
rating: "7.0",
genre: "Comedy, Drama",
duration: "2h 38m",
releaseYear: "2007",
trailer: "https://youtu.be/dEjN98Io4gs?si=Jw5Z2AfsgGQ3LDzb"
},
"Welcome Back": {
image: "images/welcome_back.jpg",
rating: "4.3",
genre: "Comedy, Action",
duration: "2h 32m",
releaseYear: "2015",
trailer: "https://youtu.be/SIKfSPbsuyw?si=-tSFC-1NTg5Bujy2"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024",
trailer: "https://youtu.be/73_1biulkYk?si=0loUv-yD2gevLMJ_"
},
"The Grand Budapest Hotel": {
    image: "images/grand_budapest_hotel.jpg",
    rating: "8.1",
    genre: "Comedy, Crime",
    duration: "1h 39m",
    releaseYear: "2014",
    trailer: "https://youtu.be/1Fg5iWmQjwk?si=_mkO_8WupstdVojD"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014",
    trailer: "https://youtu.be/SOXWc32k4zA?si=bCcxysVRdopJmslO"
},
"The Hangover": {
    image: "images/the_hangover.jpg",
    rating: "7.7",
    genre: "Comedy",
    duration: "1h 40m",
    releaseYear: "2009",
    trailer: "https://youtu.be/tlize92ffnY?si=_M7onGtx0z22WNBG"
},
"Phir Hera Pheri": {
image: "images/phir_hera_pheri.jpg",
rating: "7.2",
genre: "Comedy, Crime",
duration: "2h 33m",
releaseYear: "2006",
trailer: "https://youtu.be/1rJQQCZcq2s?si=GKPGlFsp8KxNjuWf"
},
"The Intouchables": {
    image: "images/the_intouchables.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "1h 52m",
    releaseYear: "2011",
    trailer: "https://youtu.be/34WIbmXkewU?si=zw1wW4sH9o78GNj3"
},
"Glass Onion: A Knives Out Mystery": {
image: "images/glass_onion.jpg",
rating: "7.6",
genre: "Comedy, Crime",
duration: "2h 19m",
releaseYear: "2022",
trailer: "https://youtu.be/gj5ibYSz8C0?si=kRfsCE5JOXVaqBC2"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018",
trailer: "https://youtu.be/PCf03KXyzIg?si=pu55K5K5zzSst3Kw"
},
"Dhamaal": {
image: "images/dhamaal.jpg",
rating: "7.4",
genre: "Comedy, Adventure",
duration: "2h 16m",
releaseYear: "2007",
trailer: "https://youtu.be/D7felvV3JRc?si=DklHFxWrlCy6XBC_"
},
"Double Dhamaal": {
image: "images/double_dhamaal.jpg",
rating: "3.9",
genre: "Comedy",
duration: "2h 18m",
releaseYear: "2011",
trailer: "https://youtu.be/zkIfgcl0sG0?si=-feCs9-S-8gc8rPg"
},
"Total Dhamaal": {
image: "images/total_dhamaal.jpg",
rating: "4.2",
genre: "Comedy, Adventure",
duration: "2h 10m",
releaseYear: "2019",
trailer: "https://youtu.be/fo9EhcwQXcM?si=VaTE4v4-DA6UJrhL"
},
    "Dangal": {
        image: "images/dangal.jpg",
        rating: "8.4",
        genre: "Drama, Sport",
        duration: "2h 41m",
        releaseYear: "2016",
        trailer: "https://youtu.be/x_7YlGv9u1g?si=ev4yZlOh_wnWtGn_"
    },
    "Taare Zameen Par": {
        image: "images/taare_zameen_par.jpg",
        rating: "8.4",
        genre: "Drama, Family",
        duration: "2h 45m",
        releaseYear: "2007",
        trailer: "https://youtu.be/EFfocv9BdwY?si=8SvRUthSewdooAEU"
    },
    "Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 18m",
        releaseYear: "2007",
        trailer: "https://youtu.be/UDjCsnT4lBI?si=Hk1IHNTnr3CN_RrF"
    },
    "Gangs of Wasseypur": {
    image: "images/gangs_of_wasseypur.jpg",
    rating: "8.2",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012",
    trailer: "https://youtu.be/9ZpPQdrHfl8?si=HmkTVaW9vyPDcNBp"
},
"Gangs of Wasseypur 2": {
    image: "images/gangs_of_wasseypur_2.jpg",
    rating: "8.3",
    genre: "Action, Crime, Drama",
    duration: "2h 40m",
    releaseYear: "2012",
    trailer: "https://youtu.be/XuK5TAEIqfg?si=C9IpBDr8c-ez0hg5"
},
"Andhadhun (2018)": {
    image: "images/andhadhun.jpg",
    rating: "8.3",
    genre: "Crime, Thriller, Mystery",
    duration: "2h 19m",
    releaseYear: "2018",
    trailer: "https://youtu.be/2iVYI99VGaw?si=tWOQKWM0ZNcGfdxd"
},
    "Swades": {
        image: "images/swades.jpg",
        rating: "8.2",
        genre: "Drama",
        duration: "3h 9m",
        releaseYear: "2004",
        trailer: "https://youtu.be/vc7AZNWvs0M?si=w6dc40TaqsbFUF96"
    },
    "Drishyam": {
        image: "images/drishyam.jpg",
        rating: "8.2",
        genre: "Crime, Drama, Thriller",
        duration: "2h 43m",
        releaseYear: "2015",
        trailer: "https://youtu.be/AuuX2j14NBg?si=z3cgWis_Kk-FuwJw"
    },
    "Drishyam 2": {
    image: "images/drishyam_2.jpg",
    rating: "8.3",
    genre: "Crime, Drama, Thriller",
    duration: "2h 20m",
    releaseYear: "2022",
    trailer: "https://youtu.be/cxA2y9Tgl7o?si=IlyXng5AC0ymHGAv"
},
"Super 30 (2019)": {
    image: "images/super_30.jpg",
    rating: "7.9",
    genre: "Biography, Drama",
    duration: "2h 34m",
    releaseYear: "2019",
    trailer: "https://youtu.be/QpvEWVVnICE?si=rdXHgnN7m5T6zmI6"
},
    "Chak De! India": {
        image: "images/chak_de_india.jpg",
        rating: "8.2",
        genre: "Drama, Sport",
        duration: "2h 33m",
        releaseYear: "2007",
        trailer: "https://youtu.be/6a0-dSMWm5g?si=nG5FwV1xc6OwV5J_"
    },
   "Zindagi Na Milegi Dobara": {
    image: "images/zindagi_na_milegi_dobara.jpg",
    rating: "8.2",
    genre: "Drama, Adventure, Romance",
    duration: "2h 33m",
    releaseYear: "2011",
    trailer: "https://youtu.be/FJrpcDgC3zU?si=2C47uT6JbO58Iix4"
    },
    "Sultan (2016)": {
    image: "images/sultan.jpg",
    rating: "7.5",
    genre: "Action, Drama, Sports",
    duration: "2h 50m",
    releaseYear: "2016",
    trailer: "https://youtu.be/wPxqcq6Byq0?si=pSZAuoTQzmS_mOmY"
},
    "Barfi!": {
        image: "images/barfi.jpg",
        rating: "8.1",
        genre: "Comedy, Drama, Romance",
        duration: "2h 31m",
        releaseYear: "2012",
        trailer: "https://youtu.be/nQ3FYUgSjC8?si=1dzWdlzD531fIvqV"
    },
    "Dilwale Dulhania Le Jayenge": {
        image: "images/ddlj.jpg",
        rating: "8.0",
        genre: "Romance, Drama",
        duration: "3h 9m",
        releaseYear: "1995",
        trailer: "https://youtu.be/oIZ4U21DRlM?si=qNSNu8kBWxmsU7vl"
    },
    "Tamasha": {
        image: "images/tamasha.jpg",
        rating: "7.8",
        genre: "Drama, Romance",
        duration: "2h 19m",
        releaseYear: "2015",
        trailer: "https://youtu.be/QDsRDWR-yoM?si=fxkFkcVM47jAqpge"
    },
    "Wake Up Sid": {
        image: "images/wake_up_sid.jpg",
        rating: "7.6",
        genre: "Comedy, Drama, Romance",
        duration: "2h 18m",
        releaseYear: "2009",
        trailer: "https://youtu.be/Ngimy3GpHS0?si=fBHR8fvzl7oWMQZh"
    },
"Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013",
    trailer: "https://youtu.be/FyXXgpPqe6w?si=FKS41bFDbgIM1zWQ"
},
"The Notebook": {
    image: "images/the_notebook.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 3m",
    releaseYear: "2004",
    trailer: "https://youtu.be/BjJcYdEOI0k?si=jlDkVz9N6JoHf90w"
},
"La La Land": {
        image: "images/la_la_land.jpg",
        rating: "8.0",
        genre: "Romance, Music, Drama",
        duration: "2h 8m",
        releaseYear: "2016",
        trailer: "https://youtu.be/0pdqf4P9MB8?si=uPmfxWe8whhuQJH1"
    },
   
"A Walk to Remember": {
    image: "images/a_walk_to_remember.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "2002",
    trailer: "https://youtu.be/k3B2XBcp7vA?si=hfgfN0I5JhQOmdRA"
},
"Blue Valentine": {
    image: "images/blue_valentine.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 52m",
    releaseYear: "2010",
    trailer: "https://youtu.be/aILx69WrRhQ?si=6HviBW2_pGGPurkT"
},
"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011",
    trailer: "https://youtu.be/bD5FShPZdpw?si=7tfY6sWsyK96AGHB"
},
"Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004",
    trailer: "https://youtu.be/OSaVImLnnsw?si=Zf2aY9HgHSpuLwUe"
},
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013",
        trailer: "https://youtu.be/Rbp2XUSeUNE?si=_tA-9IJ6T4PRbwNK"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009",
        trailer: "https://youtu.be/hGqE4y-_FG0?si=xSN3yMFpgooWerfT"
    },
    "Satyaprem Ki Katha": {
    image: "images/satyaprem_ki_katha.jpg",  
    rating: "7.0",  
    genre: "Romance, Drama",
    duration: "2h 26m",
    releaseYear: "2023",
    trailer: "https://youtu.be/8EPJiFfWRfw?si=FgBasBUIxgCszu7z" 
},
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975",
    trailer: "https://youtu.be/CZwUzVuIz58?si=E6dLS7ARsANhQxIT"
},
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024",
    trailer: "https://youtu.be/tF1JN2pT_sM?si=YV0xu1eDnbBEiHUW"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/B7VP47oCZfE?si=lwl7rqZQfFxIGitH"
},
"Pride & Prejudice": {
    image: "images/pride_and_prejudice.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 9m",
    releaseYear: "2005",
    trailer: "https://youtu.be/1dYv5u6v55Y?si=3AyjLaegRCYONIUt"
},
"Despicable Me 4": {
    image: "images/despicable_me_4.jpg",
    rating: "6.2",
    genre: "Animation, Comedy",
    duration: "1h 34m",
    releaseYear: "2024",
    trailer: "https://youtu.be/qQlr9-rF32A?si=knwcWUZvhbUM4zn2"
},
"My Fault": {
    image: "images/my_fault.jpg",
    rating: "6.3",
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2023",
    trailer: "https://youtu.be/3CpKBAPqqM0?si=RVOiB6O0Xiw03Vt6"
},

"Your Fault": {
    image: "images/your_fault.jpg",
    rating: "5.2", 
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2024",
    trailer: ""
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013",
    trailer: "https://youtu.be/f27QempqWdY?si=S2G7XArNtQNmtiEu"
},
"One of Them Days": {
    image: "images/one_of_them_days.jpg",
    rating: "8.2",
    genre: "Comedy, Drama",
    duration: "1h 46m",
    releaseYear: "2025",
    trailer: "https://youtu.be/-5xzjw_0d_0?si=CfCIjnt5GUB0KXM7"
},
"The Fall Guy": {
    image: "images/the_fall_guy.jpg",
    rating: "7.6",
    genre: "Action, Comedy",
    duration: "2h 6m",
    releaseYear: "2024",
    trailer: "https://youtu.be/j7jPnwVGdZ8?si=YkVfD5S5MnRT-I0n"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025",
    trailer: "https://youtu.be/osYpGSz_0i4?si=po8mK8RJOG4wY7Ji"
},
"In the Lost Lands": {
    image: "images/in_the_lost_lands.jpg",
    rating: "7.5",
    genre: "Fantasy, Adventure, Action",
    duration: "1h 45m",
    releaseYear: "2025",
    trailer: "https://youtu.be/CMyrp5Vk3mU?si=xF9f_WS5yS3Pk4uq"
}
};
const actionMovies = {
    "The Batman": {
    image: "images/the_batman.jpg",
    rating: "7.9",
    genre: "Action, Mystery",
    duration: "2h 56m",
    releaseYear: "2022",
    trailer: "https://youtu.be/mqqft2x_Aa4?si=v8ROE4KY1DvXLZQK"
},
"Shershaah": {
    image: "images/shershaah.jpg",
    rating: "8.4",
    genre: "Action, Biography",
    duration: "2h 15m",
    releaseYear: "2021",
    trailer: "https://youtu.be/Q0FTXnefVBA?si=2WMe8XlbEQuer7cT"
},
"War": {
    image: "images/war.jpg",
    rating: "7.6",
    genre: "Action, Thriller",
    duration: "2h 34m",
    releaseYear: "2019",
    trailer: "https://youtu.be/tQ0mzXRk-oM?si=btwXIQbbaqmlc7M0"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015",
    trailer: "https://youtu.be/hEJnMQG9ev8?si=amnTC58auePdNgdq"
},
"Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011",
    trailer: "https://youtu.be/JerVrbLldXw?si=zAW1OEF-XCrmcSyH"

},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014",
    trailer: "https://youtu.be/7SlILk2WMTI?si=5WrkqhvG3gKVH6b6"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016",
    trailer: "https://youtu.be/dKrVegVI0Us?si=aLfDhWaLxbekuRcf"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020",
    trailer: "https://youtu.be/1pHDWnXmK7Y?si=RBXcT5Ki83TuJEV0"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014",
    trailer: "https://youtu.be/C0BMx-qxsP4?si=jAmhyqPna4SSC_jN"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017",
    trailer: "https://youtu.be/XGk2EfbD_Ps?si=t7mZjpOWIGga6mbz"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019",
    trailer: "https://youtu.be/M7XM597XO94?si=7jW03jvu3RSDZePH"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023",
    trailer: "https://youtu.be/qEVUtrk8_B4?si=q3f--wHqZOKzlAmH"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996",
    trailer: "https://youtu.be/fsQgc9pCyDU?si=ZVOu2w1tmYF8MFtU"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000",
    trailer: "https://youtu.be/hSPtsCQq52k?si=MtH5Jbyz5PaIfy5z"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006",
    trailer: "https://youtu.be/rl2bysiyltg?si=iyUAw0_QeJSlrQFY"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011",
    trailer: "https://youtu.be/EDGYVFZxsXQ?si=IFbub_FGJSEZLJ_h"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015",
    trailer: "https://youtu.be/gOW_azQbOjw?si=WQezodotJaW1sQI8"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018",
    trailer: "https://youtu.be/wb49-oV0F78?si=jOwZmRDgHvPOzLQi"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020",
    trailer: "https://youtu.be/LdOM0x0XDMo?si=7n2RLQ7BscVJMAuK"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012",
    trailer: "https://youtu.be/6kw1UVovByw?si=bmZoNvpx_p_bcLXz"
},
"KGF Chapter 1": {
    image: "images/kgf_1.jpg",
    rating: "8.2",
    genre: "Action, Drama",
    duration: "2h 35m",
    releaseYear: "2018",
    trailer: "https://youtu.be/-KfsY-qwBS0?si=x2AwELtkSXXQ17S0"
},
"KGF Chapter 2": {
    image: "images/kgf_2.jpg",
    rating: "8.3",
    genre: "Action, Drama",
    duration: "2h 48m",
    releaseYear: "2022",
    trailer: "https://youtu.be/Qah9sSIXJqk?si=w1VteJQwdCUSqs1B"
},
"Pathaan": {
    image: "images/pathaan.jpg",
    rating: "7.5",
    genre: "Action, Thriller",
    duration: "2h 26m",
    releaseYear: "2023",
    trailer: "https://youtu.be/4xl9KfUg8Lc?si=k6xXndaTBGeVYExo"
},
"Raazi": {
    image: "images/raazi.jpg",
    rating: "7.8",
    genre: "Action, Thriller",
    duration: "2h 18m",
    releaseYear: "2018",
    trailer: "https://youtu.be/YjMSttRJrhA?si=86iGELhjN0mM7sED"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Xithigfg7dA?si=byukaiy1attvK6G-"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018",
trailer: "https://youtu.be/D86RtevtfrA?si=v8oe3qc3wIN0r2FD"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024",
trailer: "https://youtu.be/73_1biulkYk?si=0loUv-yD2gevLMJ_"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018",
trailer: "https://youtu.be/PCf03KXyzIg?si=pu55K5K5zzSst3Kw"
},
};
const horrorMovies = {
    "Annabelle": {
    image: "images/annabelle.jpg",
    rating: "7.5",
    genre: "Supernatural, Horror",
    duration: "1h 39m",
    releaseYear: "2014",
    trailer: "https://youtu.be/paFgQNPGlsg?si=KrNNzIWwfE4kMraH"
    },
    "Insidious": {
        image: "images/insidious.jpg",
        rating: "6.8",
        genre: "Supernatural, Horror",
        duration: "1h 43m",
        releaseYear: "2010",
        trailer: "https://youtu.be/62rpZcMYa0A?si=p9Ail-0zOxo11u-d"
        },
    "Train to Busan": {
        image: "images/train_to_busan.jpg",
        rating: "7.6",
        genre: "Horror, Zombie, Thriller",
        duration: "1h 58m",
        releaseYear: "2016",
        trailer: "https://youtu.be/1ovgxN2VWNc?si=58dAlWv0Ltd9PTKL"
      },
      "Tumbbad": {
        image: "images/tumbbad.jpg",
        rating: "8.2",
        genre: "Mythological, Horror",
        duration: "1h 44m",
        releaseYear: "2018",
        trailer: "https://youtu.be/YGIcZrUBY0k?si=QrtgYwDl70xz5fLw"
    },
    "The Conjuring": {
        image: "images/the_conjuring.jpg",
        rating: "7.5",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2013",
        trailer: "https://youtu.be/ejMMn0t58Lc?si=HpgvwoczNM50Uvlc"
    },
    "The Conjuring 2": {
        image: "images/the_conjuring_2.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 14m",
        releaseYear: "2016",
        trailer: "https://youtu.be/VFsmuRPClr4?si=d9ofaAQ0JBdTumzW"
    },
    "The Conjuring: The Devil Made Me Do It": {
        image: "images/the_conjuring_3.jpg",
        rating: "6.3",
        genre: "Supernatural, Horror",
        duration: "1h 52m",
        releaseYear: "2021",
        trailer: "https://youtu.be/h9Q4zZS2v1k?si=YE3juZ9-Oyx022rK"
    },
    "Hereditary": {
        image: "images/hereditary.jpg",
        rating: "7.3",
        genre: "Supernatural, Horror",
        duration: "2h 7m",
        releaseYear: "2018",
        trailer: "https://youtu.be/V6wWKNij_1M?si=BPvI8uJbUFEp-bax"
    },
    "Stree": {
        image: "images/stree.jpg",
        rating: "7.5",
        genre: "Horror, Comedy",
        duration: "2h 8m",
        releaseYear: "2018",
        trailer: "https://youtu.be/gzeaGcLLl_A?si=MO7f8zghJF6CvFYM"
    },
    "Stree 2": {
    image: "images/stree_2.jpg", 
    rating: "6.9",
    genre: "Horror, Comedy",
    duration: "2h 29m",
    releaseYear: "2024",
    trailer: "https://youtu.be/VlvOgk5BHS4?si=TYHc9--YunL2G-zw"
  },
      "Seoul Station": {
        image: "images/seoul_station.jpg", 
        rating: "6.1",
        genre: "Animation, Horror, Zombie",
        duration: "1h 32m",
        releaseYear: "2016",
        trailer: "https://youtu.be/WZZ9QHJD2_U?si=Ux_gDjOmCNB179ZM"
      },
      "Peninsula": {
        image: "images/peninsula.jpg", 
        rating: "5.5",
        genre: "Action, Horror, Thriller",
        duration: "1h 56m",
        releaseYear: "2020",
        trailer: "https://youtu.be/yVucSRLLeIM?si=nJf7CIxcHfNTV0XV"
      },

    "The Others": {
        image: "images/the_others.jpg",
        rating: "7.6",
        genre: "Horror Thriller",
        duration: "1h 44m",
        releaseYear: "2001",
        trailer: "https://youtu.be/C7pKqaPtMiA?si=Ztk6C6HWAXFQZVZr"
    },
    "Munjya (2024)": {
  image: "images/munjya.jpg",
  rating: "6.3",
  genre: "Horror, Comedy",
  duration: "2h 03m",
  releaseYear: "2024",
  trailer: "https://youtu.be/8X3uF80H5LU?si=ukUBURq6AfjqJeS0"
},
    "The Nun (2018)": {
  image: "images/the_nun.jpg",
  rating: "5.3",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 36m",
  releaseYear: "2018",
  trailer: "https://youtu.be/pzD9zGcUNrw?si=rsvM9cz5NoSSL3oT"
},
"The Nun II (2023)": {
  image: "images/the_nun_2.jpg",
  rating: "5.6",
  genre: "Horror, Mystery, Thriller",
  duration: "1h 50m",
  releaseYear: "2023",
  trailer: "https://youtu.be/QF-oyCwaArU?si=8NWvPqU2kx4QL0DJ"
},
    "Annabelle: Creation": {
    image: "images/annabelle2.jpg",
    rating: "6.5",
    genre: "Supernatural, Horror",
    duration: "1h 49m",
    releaseYear: "2017",
    trailer: "https://youtu.be/KisPhy7T__Q?si=t6inqA7ZwXX4QxtA"
  },
  "Annabelle Comes Home": {
    image: "images/annabelle3.jpg",
    rating: "6.0",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2019",
    trailer: "https://youtu.be/bCxm7cTpBAs?si=RSHVmk0KrZ-qBU09"
  },
  "Bhool Bhulaiyaa": {
    image: "images/bhool_bhulaiyaa.jpg",
    rating: "7.5",
    genre: "Horror, Comedy, Thriller",
    duration: "2h 29m",
    releaseYear: "2007",
    trailer: "https://youtu.be/ss-7iGf1xE8?si=FSLGSWSaGdJQ_LOX"
},
  "Bhool Bhulaiyaa 2": {
    image: "images/bhool_bhulaiyaa_2.jpg",
    rating: "6.5", 
    genre: "Horror, Comedy, Thriller",
    duration: "2h 23m",
    releaseYear: "2022",
    trailer: "https://youtu.be/P2KRKxAb2ek?si=ODGfwXr3imPJBH-8"
  },
  "Insidious: Chapter 2": {
    image: "images/insidious2.jpg",
    rating: "6.6",
    genre: "Supernatural, Horror",
    duration: "1h 46m",
    releaseYear: "2013",
    trailer: "https://youtu.be/fBbi4NeebAk?si=Dng-4EjBeiV2Jfm-"
  },
  "Insidious: Chapter 3": {
    image: "images/insidious3.jpg",
    rating: "6.1",
    genre: "Supernatural, Horror",
    duration: "1h 37m",
    releaseYear: "2015",
    trailer: "https://youtu.be/3HxEXnVSr1w?si=K3kR6G3CMXjWb92n"
  },
  "Insidious: The Last Key": {
    image: "images/insidious4.jpg",
    rating: "5.7",
    genre: "Supernatural, Horror",
    duration: "1h 43m",
    releaseYear: "2018",
    trailer: "https://youtu.be/acQyrwQyCOk?si=bIvLfYO3-o3shY_d"
  },
  "Insidious: The Red Door": {
    image: "images/insidious5.jpg",
    rating: "5.6",
    genre: "Supernatural, Horror",
    duration: "1h 47m",
    releaseYear: "2023",
    trailer: "https://youtu.be/ZuQuOnYnr3Q?si=j7cprx7ija-wTuuu"
  },
  "A Quiet Place": {
    image: "images/A_Quiet_Place.jpg",
    rating: "7.5",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 30m",
    releaseYear: "2018",
    trailer: "https://youtu.be/WR7cc5t7tv8?si=SmKg8nSnlDqM7ejR"
},
  "A Quiet Place Part II": {
    image: "images/A_Quiet_Place_2.jpg", 
    rating: "7.2",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 37m",
    releaseYear: "2020",
    trailer: "https://youtu.be/BpdDN9d9Jio?si=WiudYfMiYHNh8Ole"
  },
  "A Quiet Place: Day One": {
    image: "images/A_Quiet_Place_3.jpg", 
    rating: "6.3",
    genre: "Horror, Sci-Fi, Thriller",
    duration: "1h 40m",
    releaseYear: "2024",
    trailer: "https://youtu.be/YPY7J-flzE8?si=QbLfDUv15U5kMr3X"
  },
};
const comedyMovies = {
    "Forrest Gump": {
        image: "images/forrestgump.jpg",
        rating: "8.8",
        genre: "Comedy, Drama, Romance",
        duration: "2h 22m",
        releaseYear: "1994",
        trailer: "https://youtu.be/bLvqoHBptjg?si=Hnu0fNf3x5n9C_ll"
    },
    "The Intouchables": {
    image: "images/the_intouchables.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "1h 52m",
    releaseYear: "2011",
    trailer: "https://youtu.be/34WIbmXkewU?si=zw1wW4sH9o78GNj3"
},
    "Hera Pheri": {
        image: "images/hera_pheri.jpg",
        rating: "8.2",
        genre: "Comedy",
        duration: "2h 36m",
        releaseYear: "2000",
        trailer: "https://youtu.be/m1zMmVwWr-M?si=Oiqn3QbSs-4QucpI"
    },
    "Phir Hera Pheri": {
        image: "images/phir_hera_pheri.jpg",
        rating: "7.2",
        genre: "Comedy, Crime",
        duration: "2h 33m",
        releaseYear: "2006",
        trailer: "https://youtu.be/1rJQQCZcq2s?si=GKPGlFsp8KxNjuWf"
    },
 "Munna Bhai M.B.B.S.": {
    image: "images/munna_bhai_mbbs.jpg",
    rating: "8.1",
    genre: "Comedy, Drama",
    duration: "2h 36m",
    releaseYear: "2003",
    trailer: "https://youtu.be/6lCGvu-hwX4?si=RxuD5RvT4QfiPfyG"
},
"3 Idiots": {
        image: "images/3_idiots.jpg",
        rating: "8.4",
        genre: "Comedy, Drama",
        duration: "2h 50m",
        releaseYear: "2009",
        trailer: "https://youtu.be/xvszmNXdM4w?si=EmRNSxs5wCX3jryU"
    },
"Welcome": {
image: "images/welcome.jpg",
rating: "7.0",
genre: "Comedy, Drama",
duration: "2h 38m",
releaseYear: "2007",
trailer: "https://youtu.be/dEjN98Io4gs?si=Jw5Z2AfsgGQ3LDzb"
},
"Welcome Back": {
image: "images/welcome_back.jpg",
rating: "4.3",
genre: "Comedy, Action",
duration: "2h 32m",
releaseYear: "2015",
trailer: "https://youtu.be/SIKfSPbsuyw?si=-tSFC-1NTg5Bujy2"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Xithigfg7dA?si=byukaiy1attvK6G-"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018",
trailer: "https://youtu.be/D86RtevtfrA?si=v8oe3qc3wIN0r2FD"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024",
trailer: "https://youtu.be/73_1biulkYk?si=0loUv-yD2gevLMJ_"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018",
trailer: "https://youtu.be/PCf03KXyzIg?si=pu55K5K5zzSst3Kw"
},
    "The Grand Budapest Hotel": {
        image: "images/grand_budapest_hotel.jpg",
        rating: "8.1",
        genre: "Comedy, Crime",
        duration: "1h 39m",
        releaseYear: "2014",
        trailer: "https://youtu.be/1Fg5iWmQjwk?si=_mkO_8WupstdVojD"
    },
    "The Hangover": {
        image: "images/the_hangover.jpg",
        rating: "7.7",
        genre: "Comedy",
        duration: "1h 40m",
        releaseYear: "2009",
        trailer: "https://youtu.be/tlize92ffnY?si=_M7onGtx0z22WNBG"
    },
    
    "Glass Onion: A Knives Out Mystery": {
    image: "images/glass_onion.jpg",
    rating: "7.6",
    genre: "Comedy, Crime",
    duration: "2h 19m",
    releaseYear: "2022",
    trailer: "https://youtu.be/gj5ibYSz8C0?si=kRfsCE5JOXVaqBC2"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014",
    trailer: "https://youtu.be/SOXWc32k4zA?si=bCcxysVRdopJmslO"
},
"Dhamaal": {
image: "images/dhamaal.jpg",
rating: "7.4",
genre: "Comedy, Adventure",
duration: "2h 16m",
releaseYear: "2007",
trailer: "https://youtu.be/D7felvV3JRc?si=DklHFxWrlCy6XBC_"
},
"Double Dhamaal": {
image: "images/double_dhamaal.jpg",
rating: "3.9",
genre: "Comedy",
duration: "2h 18m",
releaseYear: "2011",
trailer: "https://youtu.be/zkIfgcl0sG0?si=-feCs9-S-8gc8rPg"
},
"Total Dhamaal": {
image: "images/total_dhamaal.jpg",
rating: "4.2",
genre: "Comedy, Adventure",
duration: "2h 10m",
releaseYear: "2019",
trailer: "https://youtu.be/fo9EhcwQXcM?si=VaTE4v4-DA6UJrhL"
},
"Bhool Bhulaiyaa": {
    image: "images/bhool_bhulaiyaa.jpg",
    rating: "7.4",
    genre: "Comedy, Horror, Mystery",
    duration: "2h 31m",
    releaseYear: "2007",
    trailer: "https://youtu.be/ss-7iGf1xE8?si=FSLGSWSaGdJQ_LOX"
},
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975",
    trailer: "https://youtu.be/CZwUzVuIz58?si=E6dLS7ARsANhQxIT"
},
"Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024",
    trailer: "https://youtu.be/6RT3cB3T74w?si=s7osJq0-Jnt5V_R38"
  },
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024",
    trailer: "https://youtu.be/tF1JN2pT_sM?si=YV0xu1eDnbBEiHUW"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/B7VP47oCZfE?si=lwl7rqZQfFxIGitH"
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013",
    trailer: "https://youtu.be/f27QempqWdY?si=S2G7XArNtQNmtiEu"
},
"One of Them Days": {
    image: "images/one_of_them_days.jpg",
    rating: "8.2",
    genre: "Comedy, Drama",
    duration: "1h 46m",
    releaseYear: "2025",
    trailer: "https://youtu.be/-5xzjw_0d_0?si=CfCIjnt5GUB0KXM7"
},
"The Fall Guy": {
    image: "images/the_fall_guy.jpg",
    rating: "7.6",
    genre: "Action, Comedy",
    duration: "2h 6m",
    releaseYear: "2024",
    trailer: "https://youtu.be/j7jPnwVGdZ8?si=YkVfD5S5MnRT-I0n"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025",
    trailer: "https://youtu.be/osYpGSz_0i4?si=po8mK8RJOG4wY7Ji"
},
};
const bollywoodMovies = {

 "3 Idiots": {
        image: "images/3_idiots.jpg",
        rating: "8.4",
        genre: "Comedy, Drama",
        duration: "2h 50m",
        releaseYear: "2009",
        trailer: "https://youtu.be/xvszmNXdM4w?si=EmRNSxs5wCX3jryU"
    },
    "Dangal": {
        image: "images/dangal.jpg",
        rating: "8.4",
        genre: "Drama, Sport",
        duration: "2h 41m",
        releaseYear: "2016",
        trailer: "https://youtu.be/x_7YlGv9u1g?si=ev4yZlOh_wnWtGn_"
    },
    "Taare Zameen Par": {
        image: "images/taare_zameen_par.jpg",
        rating: "8.4",
        genre: "Drama, Family",
        duration: "2h 45m",
        releaseYear: "2007",
        trailer: "https://youtu.be/EFfocv9BdwY?si=8SvRUthSewdooAEU"
    },
    "Barfi!": {
        image: "images/barfi.jpg",
        rating: "8.1",
        genre: "Comedy, Drama, Romance",
        duration: "2h 31m",
        releaseYear: "2012",
        trailer: "https://youtu.be/nQ3FYUgSjC8?si=1dzWdlzD531fIvqV"
    },
    "Zindagi Na Milegi Dobara": {
        image: "images/zindagi_na_milegi_dobara.jpg",
        rating: "8.2",
        genre: "Drama, Adventure",
        duration: "2h 33m",
        releaseYear: "2011",
        trailer: "https://youtu.be/FJrpcDgC3zU?si=2C47uT6JbO58Iix4"
        },
    "Gangs of Wasseypur": {
        image: "images/gangs_of_wasseypur.jpg",
        rating: "8.2",
        genre: "Action, Crime, Drama",
        duration: "2h 40m",
        releaseYear: "2012",
        trailer: "https://youtu.be/9ZpPQdrHfl8?si=HmkTVaW9vyPDcNBp"
    },
    "Gangs of Wasseypur 2": {
        image: "images/gangs_of_wasseypur_2.jpg",
        rating: "8.3",
        genre: "Action, Crime, Drama",
        duration: "2h 40m",
        releaseYear: "2012",
        trailer: "https://youtu.be/XuK5TAEIqfg?si=C9IpBDr8c-ez0hg5"
    },
"Andhadhun (2018)": {
    image: "images/andhadhun.jpg",
    rating: "8.3",
    genre: "Crime, Thriller, Mystery",
    duration: "2h 19m",
    releaseYear: "2018",
    trailer: "https://youtu.be/2iVYI99VGaw?si=tWOQKWM0ZNcGfdxd"
},
    "Swades": {
        image: "images/swades.jpg",
        rating: "8.2",
        genre: "Drama",
        duration: "3h 9m",
        releaseYear: "2004",
        trailer: "https://youtu.be/vc7AZNWvs0M?si=w6dc40TaqsbFUF96"
    },
    "Drishyam": {
        image: "images/drishyam.jpg",
        rating: "8.2",
        genre: "Crime, Drama, Thriller",
        duration: "2h 43m",
        releaseYear: "2015",
        trailer: "https://youtu.be/AuuX2j14NBg?si=z3cgWis_Kk-FuwJw"
    },
    "Drishyam 2": {
    image: "images/drishyam_2.jpg",
    rating: "8.3",
    genre: "Crime, Drama, Thriller",
    duration: "2h 20m",
    releaseYear: "2022",
    trailer: "https://youtu.be/cxA2y9Tgl7o?si=IlyXng5AC0ymHGAv"
},
"Super 30 (2019)": {
    image: "images/super_30.jpg",
    rating: "7.9",
    genre: "Biography, Drama",
    duration: "2h 34m",
    releaseYear: "2019",
    trailer: "https://youtu.be/QpvEWVVnICE?si=rdXHgnN7m5T6zmI6"
},
"Dilwale Dulhania Le Jayenge": {
    image: "images/ddlj.jpg",
    rating: "8.0",
    genre: "Romance, Drama",
    duration: "3h 9m",
    releaseYear: "1995",
    trailer: "https://youtu.be/oIZ4U21DRlM?si=qNSNu8kBWxmsU7vl"
},
"Hera Pheri": {
    image: "images/hera_pheri.jpg",
    rating: "8.2",
    genre: "Comedy",
    duration: "2h 36m",
    releaseYear: "2000",
    trailer: "https://youtu.be/m1zMmVwWr-M?si=Oiqn3QbSs-4QucpI"
},
"Phir Hera Pheri": {
    image: "images/phir_hera_pheri.jpg",
    rating: "7.2",
    genre: "Comedy, Crime",
    duration: "2h 33m",
    releaseYear: "2006",
    trailer: "https://youtu.be/1rJQQCZcq2s?si=GKPGlFsp8KxNjuWf"
},
"Welcome": {
image: "images/welcome.jpg",
rating: "7.0",
genre: "Comedy, Drama",
duration: "2h 38m",
releaseYear: "2007",
trailer: "https://youtu.be/dEjN98Io4gs?si=Jw5Z2AfsgGQ3LDzb"
},
"Welcome Back": {
image: "images/welcome_back.jpg",
rating: "4.3",
genre: "Comedy, Action",
duration: "2h 32m",
releaseYear: "2015",
trailer: "https://youtu.be/SIKfSPbsuyw?si=-tSFC-1NTg5Bujy2"
},
"PK": {
    image: "images/pk.jpg",
    rating: "8.1",
    genre: "Comedy, Drama, Sci-Fi",
    duration: "2h 33m",
    releaseYear: "2014",
    trailer: "https://youtu.be/SOXWc32k4zA?si=bCcxysVRdopJmslO"
},
"Dhamaal": {
image: "images/dhamaal.jpg",
rating: "7.4",
genre: "Comedy, Adventure",
duration: "2h 16m",
releaseYear: "2007",
trailer: "https://youtu.be/D7felvV3JRc?si=DklHFxWrlCy6XBC_"
},
"Double Dhamaal": {
image: "images/double_dhamaal.jpg",
rating: "3.9",
genre: "Comedy",
duration: "2h 18m",
releaseYear: "2011",
trailer: "https://youtu.be/zkIfgcl0sG0?si=-feCs9-S-8gc8rPg"
},
"Total Dhamaal": {
image: "images/total_dhamaal.jpg",
rating: "4.2",
genre: "Comedy, Adventure",
duration: "2h 10m",
releaseYear: "2019",
trailer: "https://youtu.be/fo9EhcwQXcM?si=VaTE4v4-DA6UJrhL"
},
"Bhool Bhulaiyaa": {
    image: "images/bhool_bhulaiyaa.jpg",
    rating: "7.4",
    genre: "Comedy, Horror, Mystery",
    duration: "2h 31m",
    releaseYear: "2007",
    trailer: "https://youtu.be/ss-7iGf1xE8?si=FSLGSWSaGdJQ_LOX"
},
"Chupke Chupke": {
    image: "images/chupke_chupke.jpg",
    rating: "8.3",
    genre: "Comedy, Drama",
    duration: "2h 24m",
    releaseYear: "1975",
    trailer: "https://youtu.be/CZwUzVuIz58?si=E6dLS7ARsANhQxIT"
},
"Laapataa Ladies": {
    image: "images/laapataa_ladies.jpg",
    rating: "8.5",
    genre: "Comedy, Drama",
    duration: "2h 1m",
    releaseYear: "2024",
    trailer: "https://youtu.be/tF1JN2pT_sM?si=YV0xu1eDnbBEiHUW"
},
"Madgaon Express": {
    image: "images/madgaon_express.jpg",
    rating: "7.8",
    genre: "Comedy, Drama",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/B7VP47oCZfE?si=lwl7rqZQfFxIGitH"
},
"Satyaprem Ki Katha": {
    image: "images/satyaprem_ki_katha.jpg",  
    rating: "7.0",  
    genre: "Romance, Drama",
    duration: "2h 26m",
    releaseYear: "2023",
    trailer: "https://youtu.be/8EPJiFfWRfw?si=FgBasBUIxgCszu7z" 
},

    "Munna Bhai M.B.B.S.": {
    image: "images/munna_bhai_mbbs.jpg",
    rating: "8.1",
    genre: "Comedy, Drama",
    duration: "2h 36m",
    releaseYear: "2003",
    trailer: "https://youtu.be/6lCGvu-hwX4?si=RxuD5RvT4QfiPfyG"
},
"Tamasha": {
    image: "images/tamasha.jpg",
    rating: "7.8",
    genre: "Drama, Romance",
    duration: "2h 19m",
    releaseYear: "2015",
    trailer: "https://youtu.be/QDsRDWR-yoM?si=fxkFkcVM47jAqpge"
},
"Wake Up Sid": {
    image: "images/wake_up_sid.jpg",
    rating: "7.6",
    genre: "Comedy, Drama, Romance",
    duration: "2h 18m",
    releaseYear: "2009",
    trailer: "https://youtu.be/Ngimy3GpHS0?si=fBHR8fvzl7oWMQZh"
},
"Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024",
    trailer: "https://youtu.be/bXTsJKcx_fc?si=I7M9sykwozt0UUC-"
  },
  "Bad Newz": {
    image: "images/bad_newz.jpg",
    rating: "6.5",
    genre: "Romance, Comedy",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/uV50UfcIT68?si=gkOWlGhej4mBw7z4"
  },
      "Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024",
    trailer: "https://youtu.be/6RT3cB3T74w?si=s7osJq0-Jnt5V_R38"
  },
  "Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004",
    trailer: "https://youtu.be/OSaVImLnnsw?si=Zf2aY9HgHSpuLwUe"
},"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011",
    trailer: "https://youtu.be/bD5FShPZdpw?si=7tfY6sWsyK96AGHB"
},
"Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013",
    trailer: "https://youtu.be/FyXXgpPqe6w?si=FKS41bFDbgIM1zWQ"
},
"Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 18m",
        releaseYear: "2007",
        trailer: "https://youtu.be/UDjCsnT4lBI?si=Hk1IHNTnr3CN_RrF"
    },
    "Kabir Singh": {
        image: "images/kabir_singh.jpg",
        rating: "7.0",
        genre: "Romance, Drama",
        duration: "2h 55m",
        releaseYear: "2019",
        trailer: "https://youtu.be/RiANSSgCuJk?si=mLVx8aRqUcvxGqn_"
    },
    "Raanjhanaa": {
        image: "images/raanjhanaa.jpg",
        rating: "7.6",
        genre: "Romance, Drama",
        duration: "2h 19m",
        releaseYear: "2013",
        trailer: "https://youtu.be/ER9vmhxFucg?si=sUrLWgnYLv_0_egr"
    },
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013",
        trailer: "https://youtu.be/Rbp2XUSeUNE?si=_tA-9IJ6T4PRbwNK"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009",
        trailer: "https://youtu.be/hGqE4y-_FG0?si=xSN3yMFpgooWerfT"
    },
    "Chak De! India": {
        image: "images/chak_de_india.jpg",
        rating: "8.2",
        genre: "Drama, Sport",
        duration: "2h 33m",
        releaseYear: "2007",
        trailer: "https://youtu.be/6a0-dSMWm5g?si=nG5FwV1xc6OwV5J_"
    },
"Kal Ho Naa Ho": {
        image: "images/kal_ho_naa_ho.jpg",
        rating: "7.9",
        genre: "Romance, Drama",
        duration: "3h 6m",
        releaseYear: "2003",
        trailer: "https://youtu.be/tVMAQAsjsOU?si=MNqOebkpl9MGP7cQ"
    },
    "Sultan (2016)": {
        image: "images/sultan.jpg",
        rating: "7.5",
        genre: "Action, Drama, Sports",
        duration: "2h 50m",
        releaseYear: "2016",
        trailer: "https://youtu.be/wPxqcq6Byq0?si=pSZAuoTQzmS_mOmY"
    },
    "Raees": {
    image: "images/raees.jpg",
    rating: "6.8",
    genre: "Action, Drama, Romance",
    duration: "2h 23m",
    releaseYear: "2017",
    trailer: "https://youtu.be/J7_1MU3gDk0?si=U8p0Hl4CEOrI4dR3"
}
};
const hollywoodMovies = {
    "The Batman": {
        image: "images/the_batman.jpg",
        rating: "7.9",
        genre: "Action, Mystery",
        duration: "2h 56m",
        releaseYear: "2022",
        trailer: "https://youtu.be/mqqft2x_Aa4?si=v8ROE4KY1DvXLZQK"
    },
    "Inception": {
        image: "images/Inception.jpg",
        rating: "8.8",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 28m",
        releaseYear: "2010",
        trailer: "https://youtu.be/YoHD9XEInc0?si=-oZhNN3ITr7jarHS"
    },
    "Interstellar": {
        image: "images/Interstellar.jpg",
        rating: "8.6",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "2h 49m",
        releaseYear: "2014",
        trailer: "https://youtu.be/zSWdZVtXT7E?si=oHkEJ5Fet5XekNi6"
    },

    "Pulp Fiction": {
        image: "images/pulpfiction.jpg",
        rating: "8.9",
        genre: "Crime, Drama",
        duration: "2h 34m",
        releaseYear: "1994",
        trailer: "https://youtu.be/s7EdQ4FqbhY?si=9IIPWct8P7SRcnKc"
    },
    "The Avengers": {
        image: "images/the_avengers.jpg",
        rating: "8.0",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 23m",
        releaseYear: "2012",
         trailer: "https://youtu.be/eOrNdBpGMv8?si=S8UlgbuuiXqMCEAz"
    },
    "Avengers: Age of Ultron": {
        image: "images/avengers2.jpg",
        rating: "7.3",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 21m",
        releaseYear: "2015",
        trailer: "https://youtu.be/tmeOjFno6Do?si=g8cKuwtpfHGH_Bfg"
    }, 
    "Avengers: Infinity War": {
        image: "images/avengers3.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 29m",
        releaseYear: "2018",
        trailer: "https://youtu.be/6ZfuNTqbHE8?si=JmwaAExaH_UV6K7V"
    },
    "Avengers: Endgame": {
        image: "images/avengers4.jpg",
        rating: "8.4",
        genre: "Action, Adventure, Drama",
        duration: "3h 01m",
        releaseYear: "2019",
        trailer: "https://youtu.be/TcMBFSGVi1c?si=Wn_Q58z6V03Kusom"
    },
    "Moana": {
    image: "images/moana.jpg",
    rating: "7.6",
    genre: "Animation, Adventure, Family",
    duration: "1h 47m",
    releaseYear: "2016",
    trailer: "https://youtu.be/LKFuXETZUsI?si=qpK_rQwBqEQFmkfZ"
},
"Moana 2": {
    image: "images/moana_2.jpg", 
    rating: "6.6",
    genre: "Animation, Adventure",
    duration: "1h 40m",
    releaseYear: "2024",
    trailer: "https://youtu.be/hDZ7y8RP5HE?si=tl4cV-0yE562VeSr"
},
    "Avatar": {
        image: "images/avatar.jpg",
        rating: "7.9",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 42m",
        releaseYear: "2008",
        trailer: "https://youtu.be/5PSNL1qE6VY?si=kLvZCR61fxB8c3b0"
    },
    "Avatar: The way of water": {
        image: "images/avatar_thewayofwater.jpg",
        rating: "7.5",
        genre: "Action, Adventure, Sci-Fi",
        duration: "3h 12m",
        releaseYear: "2022",
        trailer: "https://youtu.be/d9MyW72ELq0?si=ixSh95He0VlXIRyD"
    },
    "Harry Potter and the Sorcerer's Stone": {
        image: "images/hp1.jpg",
        rating: "7.6",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 32m",
        releaseYear: "2001",
        trailer: "https://youtu.be/VyHV0BRtdxo?si=RuvcN3hh0m2PrkH-"
    },
    "Harry Potter and the Chamber of Secrets": {
        image: "images/hp2.jpg",
        rating: "7.4",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 41m",
        releaseYear: "2002",
        trailer: "https://youtu.be/nE11U5iBnH0?si=BffLzRoJDh29N8eK"
    },
    "Harry Potter and the Prisoner of Azkaban": {
        image: "images/hp3.jpg",
        rating: "7.9",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 22m",
        releaseYear: "2004",
        trailer: "https://youtu.be/VwErvYgoH70?si=UNG9VnW3QKUGE6ZR"
    },
    "Harry Potter and the Goblet of Fire": {
        image: "images/hp4.jpg",
        rating: "7.7",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 37m",
        releaseYear: "2005",
        trailer: "https://youtu.be/80kuiBq95So?si=fK54GbFarQfoRgBg"
    },
    "Harry Potter and the Order of the Phoenix": {
        image: "images/hp5.jpg",
        rating: "7.5",
        genre: "Action, Adventure, Family",
        duration: "2h 22m",
        releaseYear: "2007",
        trailer: "https://youtu.be/LLAaW1EgyY8?si=P5Fs2FQhvneiqdgo"
    },
    "Harry Potter and the Half-Blood Prince": {
        image: "images/hp6.jpg",
        rating: "7.6",
        genre: "Action, Adventure, Family",
        duration: "2h 33m",
        releaseYear: "2009",
        trailer: "https://youtu.be/tAiy66Xrsz4?si=G8NIZfHgGaHXEYVp"
    },
    "Harry Potter and the Deathly Hallows: Part 1": {
        image: "images/hp7.jpg",
        rating: "7.7",
        genre: "Adventure, Family, Fantasy",
        duration: "2h 26m",
        releaseYear: "2010",
        trailer: "https://youtu.be/Su1LOpjvdZ4?si=PTF3dtTmn-I5lPIk"
    },
    "Harry Potter and the Deathly Hallows: Part 2": {
        image: "images/hp8.jpg",
        rating: "8.1",
        genre: "Action, Adventure, Drama",
        duration: "2h 10m",
        releaseYear: "2011",
        trailer: "https://youtu.be/mObK5XD8udk?si=icJLB8m7M6MMHlu_"
    },
"The Dark Knight": {
    image: "images/thedarkknight.jpg",
    rating: "9.0",
    genre: "Action, Crime, Drama",
    duration: "2h 32m",
    releaseYear: "2008",
    trailer: "https://youtu.be/EXeTwQWrcwY?si=h1Yhx9zsGKdrCO-5"
},
"The Dark Knight Rises": {
    image: "images/thedarkknightrises.jpg",
    rating: "8.4",
    genre: "Action, Thriller",
    duration: "2h 32m",
    releaseYear: "2012",
    trailer: "https://youtu.be/GokKUqLcvD8?si=NXqdOh_UjWxXAQfY"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014",
    trailer: "https://youtu.be/9ItBvH5J6ss?si=FWo_nzTNIBeCSCRa"
},
"Titanic": {
    image: "images/Titanic.jpg",
    rating: "7.9",
    genre: "Drama, Romance",
    duration: "3h 14m",
    releaseYear: "1997",
     trailer: "https://youtu.be/kVrqfYjkTdQ?si=qaKIB3o7y6NOxldz"
},
 "Captain America: The First Avenger (2011)": {
    image: "images/ca1.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Sci-Fi",
    duration: "2h 4m",
    releaseYear: "2011",
    trailer: "https://youtu.be/JerVrbLldXw?si=zAW1OEF-XCrmcSyH"

},
"Captain America: The Winter Soldier (2014)": {
    image: "images/ca2.jpg",
    rating: "7.8",
    genre: "Action, Adventure, Thriller",
    duration: "2h 16m",
    releaseYear: "2014",
    trailer: "https://youtu.be/7SlILk2WMTI?si=5WrkqhvG3gKVH6b6"
},
"Captain America: Civil War": {
    image: "images/ca3.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 27m",
    releaseYear: "2016",
    trailer: "https://youtu.be/dKrVegVI0Us?si=aLfDhWaLxbekuRcf"
},
"captain America: Brave New World": {
    image: "images/ca4.jpg",
    rating: "5.8",
    genre: "Action",
    duration: "1h 58m",
    releaseYear: "2020",
    trailer: "https://youtu.be/1pHDWnXmK7Y?si=RBXcT5Ki83TuJEV0"
},
    "Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994",
    trailer: "https://youtu.be/bLvqoHBptjg?si=Hnu0fNf3x5n9C_ll"
    }, 
    "The Godfather": {
        image: "images/the_godfather.jpg",
        rating: "9.2",
        genre: "Crime, Drama",
        duration: "2h 55m",
        releaseYear: "1972",
        trailer: "https://youtu.be/UaVTIH8mujA?si=WW-n3ShQQF48HQdT"
    }, 
    "The Godfather II": {
        image: "images/thegodfatherII.jpg",
        rating: "9.0",
        genre: "Crime, Drama",
        duration: "3h 22m",
        releaseYear: "1974",
        trailer: "https://youtu.be/9O1Iy9od7-A?si=rL04oh_HUHECqh6I"
    }, 
    "The Godfather III": {
        image: "images/thegodfatherIII.jpg",
        rating: "7.6",
        genre: "Crime, Drama",
        duration: "2h 50m",
        releaseYear: "1990",
        trailer: "https://youtu.be/UUkG37KSWf0?si=mV40b3KiSyahq_Ls"
    },
    "The Matrix": {
    image: "images/thematrix.jpg",
    rating: "8.7",
    genre: "Action, Sci-Fi",
    duration: "2h 16m",
    releaseYear: "1999",
    trailer: "https://youtu.be/vKQi3bBA1y8?si=-nSvERMZ295rZ6_J"
    },
    "The Matrix Reloaded": {
    image: "images/thematrixreloaded.jpg",
    rating: "7.2",
    genre: "Action, Sci-Fi",
    duration: "2h 18m",
    releaseYear: "2003",
     trailer: "https://youtu.be/kYzz0FSgpSU?si=m4LlPmwoEdH0OwC7"
    },
    "The Matrix Revolutions": {
    image: "images/thematrixrevolutions.jpg",
    rating: "6.8",
    genre: "Action, Sci-Fi",
    duration: "2h 9m",
    releaseYear: "2003",
    trailer: "https://youtu.be/hMbexEPAOQI?si=qo5qLEdHXU2rSPSG"
},
    "The Matrix Resurrections": {
    image: "images/thematrixresurrections.jpg",
    rating: "5.7",
    genre: "Action, Sci-Fi",
    duration: "2h 28m",
    releaseYear: "2021",
    trailer: "https://youtu.be/9ix7TUGVYIo?si=EJhYB2K4COy4I0Tn"
},
"John Wick": {
    image: "images/john_wick_1.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "1h 41m",
    releaseYear: "2014",
    trailer: "https://youtu.be/C0BMx-qxsP4?si=jAmhyqPna4SSC_jN"
},
"John Wick: Chapter 2": {
    image: "images/john_wick_2.jpg",
    rating: "7.5",
    genre: "Action, Crime, Thriller",
    duration: "2h 2m",
    releaseYear: "2017",
    trailer: "https://youtu.be/XGk2EfbD_Ps?si=t7mZjpOWIGga6mbz"
},
"John Wick: Chapter 3 – Parabellum": {
    image: "images/john_wick_3.jpg",
    rating: "7.4",
    genre: "Action, Crime, Thriller",
    duration: "2h 10m",
    releaseYear: "2019",
    trailer: "https://youtu.be/M7XM597XO94?si=7jW03jvu3RSDZePH"
},
"John Wick: Chapter 4": {
    image: "images/john_wick_4.jpg",
    rating: "8.0",
    genre: "Action, Crime",
    duration: "2h 49m",
    releaseYear: "2023",
    trailer: "https://youtu.be/qEVUtrk8_B4?si=q3f--wHqZOKzlAmH"
},
"Mission: Impossible": {
    image: "images/mi_1.jpg",
    rating: "7.1",
    genre: "Action, Adventure, Thriller",
    duration: "1h 50m",
    releaseYear: "1996",
    trailer: "https://youtu.be/fsQgc9pCyDU?si=ZVOu2w1tmYF8MFtU"
},
"Mission: Impossible 2": {
    image: "images/mi_2.jpg",
    rating: "6.1",
    genre: "Action, Adventure, Thriller",
    duration: "2h 3m",
    releaseYear: "2000",
    trailer: "https://youtu.be/hSPtsCQq52k?si=MtH5Jbyz5PaIfy5z"
},
"Mission: Impossible 3": {
    image: "images/mi_3.jpg",
    rating: "6.9",
    genre: "Action, Adventure, Thriller",
    duration: "2h 6m",
    releaseYear: "2006",
    trailer: "https://youtu.be/rl2bysiyltg?si=iyUAw0_QeJSlrQFY"
},
"Mission: Impossible Ghost Protocol": {
    image: "images/mi_4.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 13m",
    releaseYear: "2011",
    trailer: "https://youtu.be/EDGYVFZxsXQ?si=IFbub_FGJSEZLJ_h"
},
"Mission: Impossible Rogue Nation": {
    image: "images/mi_5.jpg",
    rating: "7.4",
    genre: "Action, Adventure, Thriller",
    duration: "2h 11m",
    releaseYear: "2015",
    trailer: "https://youtu.be/gOW_azQbOjw?si=WQezodotJaW1sQI8"
},
"Mission: Impossible Fallout": {
    image: "images/mi_6.jpg",
    rating: "7.7",
    genre: "Action, Adventure",
    duration: "2h 27m",
    releaseYear: "2018",
    trailer: "https://youtu.be/wb49-oV0F78?si=jOwZmRDgHvPOzLQi"
},
"Eternal Sunshine of the Spotless Mind": {
    image: "images/eternal_sunshine.jpg",
    rating: "8.3",
    genre: "Romance, Drama, Sci-Fi",
    duration: "1h 48m",
    releaseYear: "2004",
    trailer: "https://youtu.be/07-QBnEkgXU?si=OFrg0raFjq6H_Kwp"
},
"Skyfall": {
    image: "images/skyfall.jpg",
    rating: "7.8",
    genre: "Action, Spy",
    duration: "2h 23m",
    releaseYear: "2012",
    trailer: "https://youtu.be/6kw1UVovByw?si=bmZoNvpx_p_bcLXz"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011",
    trailer: "https://youtu.be/zVuuooZqVaU?si=CPD3fGcNixkwQbdH"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Eh993__rOxA?si=F1nqm_cW6unZdaIT"
},
"Tenet": {
    image: "images/tenet.jpg",
    rating: "7.8",
    genre: "Action, Sci-Fi",
    duration: "2h 30m",
    releaseYear: "2020",
    trailer: "https://youtu.be/LdOM0x0XDMo?si=7n2RLQ7BscVJMAuK"
},
"The Grand Budapest Hotel": {
    image: "images/grand_budapest_hotel.jpg",
    rating: "8.1",
    genre: "Comedy, Crime",
    duration: "1h 39m",
    releaseYear: "2014",
    trailer: "https://youtu.be/1Fg5iWmQjwk?si=_mkO_8WupstdVojD"
},
"Forrest Gump": {
    image: "images/forrestgump.jpg",
    rating: "8.8",
    genre: "Comedy, Drama, Romance",
    duration: "2h 22m",
    releaseYear: "1994",
    trailer: "https://youtu.be/bLvqoHBptjg?si=Hnu0fNf3x5n9C_ll"
},
"Despicable Me": {
    image: "images/despicable_me.jpg",
    rating: "7.6",
    genre: "Animation, Comedy, Family",
    duration: "1h 35m",
    releaseYear: "2010",
    trailer: "https://youtu.be/zzCZ1W_CUoI?si=ncSWOO3TuRCZZIl_"
},

"Despicable Me 2": {
    image: "images/despicable_me_2.jpg",
    rating: "7.3",
    genre: "Animation, Comedy, Family",
    duration: "1h 38m",
    releaseYear: "2013",
    trailer: "https://youtu.be/yM9sKpQOuEw?si=K858qAZ_luHPJZcz"
},

"Despicable Me 3": {
    image: "images/despicable_me_3.jpg",
    rating: "6.2",
    genre: "Animation, Comedy, Family",
    duration: "1h 29m",
    releaseYear: "2017",
    trailer: "https://youtu.be/6DBi41reeF0?si=xD4p_7tFGGPX3TE6"
},

"Despicable Me 4": {
    image: "images/despicable_me_4.jpg", 
    rating: "6.2", 
    genre: "Animation, Comedy, Family",
    duration: "1h 34m",
    releaseYear: "2024",
    trailer: "https://youtu.be/qQlr9-rF32A?si=knwcWUZvhbUM4zn2"
},
"Deadpool": {
    image: "images/deadpool.jpg",
    rating: "8.0",
    genre: "Action, Comedy",
    duration: "1h 48m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Xithigfg7dA?si=byukaiy1attvK6G-"
},
"Deadpool 2": {
image: "images/deadpool_2.jpg",
rating: "7.7",
genre: "Action, Comedy, Sci-Fi",
duration: "2h 0m",
releaseYear: "2018",
trailer: "https://youtu.be/D86RtevtfrA?si=v8oe3qc3wIN0r2FD"
},
"Deadpool & Wolverine": {
image: "images/deadpool_3.jpg",
rating: "7.6",
genre: "Action, Comedy, Superhero",
duration: "2h 8m",
releaseYear: "2024",
trailer: "https://youtu.be/73_1biulkYk?si=0loUv-yD2gevLMJ_"
},
"Once Upon a Deadpool": {
image: "images/deadpool_4.jpg",
rating: "7.5",
genre: "Action, Comedy, Superhero",
duration: "1h 57m",
releaseYear: "2018",
trailer: "https://youtu.be/PCf03KXyzIg?si=pu55K5K5zzSst3Kw"
},
"Mad Max: Fury Road": {
    image: "images/mad_max.jpg",
    rating: "8.1",
    genre: "Action, Adventure",
    duration: "2h 0m",
    releaseYear: "2015",
    trailer: "https://youtu.be/hEJnMQG9ev8?si=amnTC58auePdNgdq"
},
"We're the Millers": {
    image: "images/were_the_millers.jpg",
    rating: "7.0",
    genre: "Comedy, Crime",
    duration: "1h 50m",
    releaseYear: "2013",
    trailer: "https://youtu.be/f27QempqWdY?si=S2G7XArNtQNmtiEu"
},
"Mickey 17": {
    image: "images/mickey_17.jpg",
    rating: "7.9",
    genre: "Sci-Fi, Comedy, Action",
    duration: "1h 55m",
    releaseYear: "2025",
    trailer: "https://youtu.be/osYpGSz_0i4?si=po8mK8RJOG4wY7Ji"
},
"In the Lost Lands": {
    image: "images/in_the_lost_lands.jpg",
    rating: "7.5",
    genre: "Fantasy, Adventure, Action",
    duration: "1h 45m",
    releaseYear: "2025",
    trailer: "https://youtu.be/CMyrp5Vk3mU?si=xF9f_WS5yS3Pk4uq"
}
};
const romanticMovies = {
   "Anora": {
    image: "images/anora.jpg",
    rating: "8.0",
    genre: "Romance, Comedy, Drama",
    duration: "2h 19m",
    releaseYear: "2024",
    trailer: "https://youtu.be/GuPkfvxmtdw?si=r7_tKeRKmjRnDFH3"
},
    "Titanic": {
    image: "images/titanic.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "3h 14m",
    releaseYear: "1997",
    trailer: "https://youtu.be/kVrqfYjkTdQ?si=qaKIB3o7y6NOxldz"
},
"Jab We Met": {
        image: "images/jab_we_met.jpg",
        rating: "7.9",
        genre: "Romance, Comedy, Drama",
        duration: "2h 29m",
        releaseYear: "2007",
        trailer: "https://youtu.be/UDjCsnT4lBI?si=Hk1IHNTnr3CN_RrF"
    },
    "Aashiqui 2": {
    image: "images/aashiqui_2.jpg",
    rating: "7.0",
    genre: "Romance, Musical, Drama",
    duration: "2h 12m",
    releaseYear: "2013",
    trailer: "https://youtu.be/FyXXgpPqe6w?si=FKS41bFDbgIM1zWQ"
},
"The Notebook": {
    image: "images/the_notebook.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 3m",
    releaseYear: "2004",
    trailer: "https://youtu.be/BjJcYdEOI0k?si=jlDkVz9N6JoHf90w"
},
"La La Land": {
        image: "images/la_la_land.jpg",
        rating: "8.0",
        genre: "Romance, Music, Drama",
        duration: "2h 8m",
        releaseYear: "2016",
        trailer: "https://youtu.be/0pdqf4P9MB8?si=uPmfxWe8whhuQJH1"
    },
   
"A Walk to Remember": {
    image: "images/a_walk_to_remember.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "2002",
    trailer: "https://youtu.be/k3B2XBcp7vA?si=hfgfN0I5JhQOmdRA"
},
"Blue Valentine": {
    image: "images/blue_valentine.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 52m",
    releaseYear: "2010",
    trailer: "https://youtu.be/aILx69WrRhQ?si=6HviBW2_pGGPurkT"
},
"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011",
    trailer: "https://youtu.be/bD5FShPZdpw?si=7tfY6sWsyK96AGHB"
},
"Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004",
    trailer: "https://youtu.be/OSaVImLnnsw?si=Zf2aY9HgHSpuLwUe"
},
    "Yeh Jawaani Hai Deewani": {
        image: "images/yeh_jawaani_hai_deewani.jpg",
        rating: "7.7",
        genre: "Romance, Drama, Comedy",
        duration: "2h 39m",
        releaseYear: "2013",
        trailer: "https://youtu.be/Rbp2XUSeUNE?si=_tA-9IJ6T4PRbwNK"
    },
    "Ajab Prem Ki Ghazab Kahani": {
        image: "images/ajab_prem_ki_ghazab_kahani.jpg",
        rating: "6.7",
        genre: "Romance, Comedy",
        duration: "2h 23m",
        releaseYear: "2009",
        trailer: "https://youtu.be/hGqE4y-_FG0?si=xSN3yMFpgooWerfT"
    },
"My Fault": {
    image: "images/my_fault.jpg",
    rating: "6.3",
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2023",
    trailer: "https://youtu.be/3CpKBAPqqM0?si=RVOiB6O0Xiw03Vt6"
},

"Your Fault": {
    image: "images/your_fault.jpg",
    rating: "5.2", 
    genre: "Romance, Drama",
    duration: "1h 57m",
    releaseYear: "2024",
    trailer: "https://youtu.be/f27QempqWdY?si=kzERuOPLqgG5P_5H"
},
"Blue Valentine": {
    image: "images/blue_valentine.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "1h 52m",
    releaseYear: "2010",
    trailer: "https://youtu.be/aILx69WrRhQ?si=6HviBW2_pGGPurkT"
},
"Rockstar": {
    image: "images/rockstar.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Musical",
    duration: "2h 39m",
    releaseYear: "2011",
    trailer: "https://youtu.be/bD5FShPZdpw?si=7tfY6sWsyK96AGHB"
},
"Veer-Zaara": {
    image: "images/veer_zaara.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "3h 12m",
    releaseYear: "2004",
    trailer: "https://youtu.be/OSaVImLnnsw?si=Zf2aY9HgHSpuLwUe"
},
"Tamasha": {
    image: "images/tamasha.jpg",
    rating: "7.3",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2015",
    trailer: "https://youtu.be/QDsRDWR-yoM?si=fxkFkcVM47jAqpge"
},
   "Kabir Singh": {
    image: "images/kabir_singh.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "2h 55m",
    releaseYear: "2019",
    trailer: "https://youtu.be/RiANSSgCuJk?si=mLVx8aRqUcvxGqn_"
},
"Before Sunrise": {
    image: "images/before_sunrise.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 41m",
    releaseYear: "1995",
    trailer: "https://youtu.be/6MUcuqbGTxc?si=uUorEzOcgwrl8mbn"
},
"Before Sunset": {
    image: "images/before_sunset.jpg",
    rating: "8.1",
    genre: "Romance, Drama",
    duration: "1h 20m",
    releaseYear: "2004",
    trailer: "https://youtu.be/oI3UuneLcyU?si=vkoJZbzR9SkhbgBi"
},
"Before Midnight": {
    image: "images/before_midnight.jpg",
    rating: "7.9",
    genre: "Romance, Drama",
    duration: "1h 49m",
    releaseYear: "2013",
    trailer: "https://youtu.be/Kv6JWoVKlGY?si=iY1h1dR8Ypnw262s"
},
"Call Me by Your Name": {
    image: "images/call_me_by_your_name.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 12m",
    releaseYear: "2017",
    trailer: "https://youtu.be/Z9AYPxH5NTM?si=KwQYEoAqSYRDxxRt"
},
"Raanjhanaa": {
    image: "images/raanjhanaa.jpg",
    rating: "7.6",
    genre: "Romance, Drama",
    duration: "2h 19m",
    releaseYear: "2013",
    trailer: "https://youtu.be/ER9vmhxFucg?si=sUrLWgnYLv_0_egr"
},
"Yeh Jawaani Hai Deewani": {
    image: "images/yeh_jawaani_hai_deewani.jpg",
    rating: "7.7",
    genre: "Romance, Drama, Comedy",
    duration: "2h 39m",
    releaseYear: "2013",
    trailer: "https://youtu.be/Rbp2XUSeUNE?si=_tA-9IJ6T4PRbwNK"
},
"Ajab Prem Ki Ghazab Kahani": {
    image: "images/ajab_prem_ki_ghazab_kahani.jpg",
    rating: "6.7",
    genre: "Romance, Comedy",
    duration: "2h 23m",
    releaseYear: "2009",
    trailer: "https://youtu.be/hGqE4y-_FG0?si=xSN3yMFpgooWerfT"
},
    "Dhoom Dhaam": {
    image: "images/dhoom_dhaam.jpg",
    rating: "7.2",
    genre: "Romance, Comedy",
    duration: "2h 10m",
    releaseYear: "2024",
    trailer: "https://youtu.be/6RT3cB3T74w?si=s7osJq0-Jnt5V_R38"
  },
  "Nadaaniyan": {
    image: "images/nadaaniyan.jpg",
    rating: "6.0",
    genre: "Romance, Comedy",
    duration: "1h 55m",
    releaseYear: "2024",
    trailer: "https://youtu.be/bXTsJKcx_fc?si=I7M9sykwozt0UUC-"
  },
  "Bad Newz": {
    image: "images/bad_newz.jpg",
    rating: "6.5",
    genre: "Romance, Comedy",
    duration: "2h 5m",
    releaseYear: "2024",
    trailer: "https://youtu.be/uV50UfcIT68?si=gkOWlGhej4mBw7z4"
  },
"Pride & Prejudice": {
    image: "images/pride_and_prejudice.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 9m",
    releaseYear: "2005",
    trailer: "https://youtu.be/1dYv5u6v55Y?si=3AyjLaegRCYONIUt"
},
"One Day": {
    image: "images/one_day.jpg",
    rating: "7.0",
    genre: "Romance, Drama",
    duration: "1h 47m",
    releaseYear: "2011",
    trailer: "https://youtu.be/zVuuooZqVaU?si=CPD3fGcNixkwQbdH"
},
"Me Before You": {
    image: "images/me_before_you.jpg",
    rating: "7.4",
    genre: "Romance, Drama",
    duration: "1h 50m",
    releaseYear: "2016",
    trailer: "https://youtu.be/Eh993__rOxA?si=F1nqm_cW6unZdaIT"
},
"The Fault in Our Stars": {
    image: "images/the_fault_in_our_stars.jpg",
    rating: "7.7",
    genre: "Romance, Drama",
    duration: "2h 6m",
    releaseYear: "2014",
    trailer: "https://youtu.be/9ItBvH5J6ss?si=FWo_nzTNIBeCSCRa"
},
"The Notebook": {
    image: "images/the_notebook.jpg",
    rating: "7.8",
    genre: "Romance, Drama",
    duration: "2h 3m",
    releaseYear: "2004",
    trailer: "https://youtu.be/BjJcYdEOI0k?si=jlDkVz9N6JoHf90w"
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
                <img src="${movie.image}" class="card-image" alt="${movieKey}" loading="lazy">
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
        <div class="trailer-link">
  ${movie.trailer ? `<a href="${movie.trailer}" target="_blank" class="trailer-btn">🎬 Watch Trailer</a>` : ''}
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
        moviesGrid.innerHTML = `<p style="color: white; font-weight: bold;">No movie found with name "${input}" Try something else!</p>`;
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