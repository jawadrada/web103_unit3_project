const events = [
    {
        "id": 1,
        "title": "Wage War - The Manic Tour",
        "date": "Apr 14, 2023",
        "time": 1800,
        "location": 1,
        "image": "https://i.iheart.com/v3/catalog/artist/30912460?ops=fit(720%2C720)",
        "remaining": {
            "years": -1,
            "months": -5,
            "days": -27
        }
    },
    {
        "id": 2,
        "title": "Spiritbox",
        "date": "Apr 21, 2023",
        "time": 1800,
        "location": 1,
        "image": "https://i.scdn.co/image/ab6761610000e5eb9e6c14bd347a74387a544d05",
        "remaining": {
            "years": -1,
            "months": -5,
            "days": -20
        }
    },
    {
        "id": 3,
        "title": "Badflower: Asking for a Friend",
        "date": "Mar 23, 2023",
        "time": 1900,
        "location": 2,
        "image": "https://bandwagmag.com/wp-content/uploads/2016/12/10-og.jpg",
        "remaining": {
            "years": -1,
            "months": -6,
            "days": -19
        }
    },
    {
        "id": 4,
        "title": "Coheed and Cambria",
        "date": "May 14, 2023",
        "time": 1900,
        "location": 2,
        "image": "https://i.scdn.co/image/ab6761610000e5ebe63ceef20dce0ac6522c4011",
        "remaining": {
            "years": -1,
            "months": -4,
            "days": -28
        }
    },
    {
        "id": 5,
        "title": "Yeah Yeah Yeahs",
        "date": "May 08, 2023",
        "time": 2000,
        "location": 3,
        "image": "https://static01.nyt.com/images/2013/03/31/magazine/31kareno4/31kareno4-superJumbo-v3.jpg",
        "remaining": {
            "years": -1,
            "months": -5,
            "days": -3
        }
    },
    {
        "id": 6,
        "title": "Weezer",
        "date": "Jun 05, 2023",
        "time": 1900,
        "location": 3,
        "image": "https://static.stereogum.com/uploads/2021/05/The-Green-Album-1620834349-scaled.jpeg",
        "remaining": {
            "years": -1,
            "months": -4,
            "days": -6
        }
    },
    {
        "id": 7,
        "title": "Sublime",
        "date": "Jul 22, 2023",
        "time": 1700,
        "location": 3,
        "image": "https://merchbar.imgix.net/product/105/6519/4001755627602/ODAyiKAK85-1.png?quality=60&auto=compress,format&w=3840",
        "remaining": {
            "years": -1,
            "months": -2,
            "days": -20
        }
    },
    {
        "id": 8,
        "title": "Sad Summer Fest",
        "date": "Jul 24, 2023",
        "time": 1400,
        "location": 3,
        "image": "https://assets.website-files.com/609075d36493a9d63653ead7/63c74cf342c0edb9de0a2826_SSF23_Website_MobileHeader.png",
        "remaining": {
            "years": -1,
            "months": -2,
            "days": -18
        }
    },
    {
        "id": 9,
        "title": "Yellowcard",
        "date": "Jul 26, 2023",
        "time": 1900,
        "location": 3,
        "image": "https://i.scdn.co/image/ab6761610000e5eb952381a70ceeda02554ad545",
        "remaining": {
            "years": -1,
            "months": -2,
            "days": -16
        }
    },
    {
        "id": 10,
        "title": "3 Doors Down",
        "date": "Sep 21, 2023",
        "time": 2000,
        "location": 3,
        "image": "https://iscale.iheart.com/catalog/artist/36646",
        "remaining": {
            "years": -1,
            "days": -20
        }
    },
    {
        "id": 11,
        "title": "Atreyu",
        "date": "May 12, 2023",
        "time": 1800,
        "location": 1,
        "image": "https://i.scdn.co/image/ab6761610000e5eb95414338c072c7655e751bf1",
        "remaining": {
            "years": -1,
            "months": -4,
            "days": -30
        }
    },
    {
        "id": 12,
        "title": "Thrice",
        "date": "May 21, 2023",
        "time": 1900,
        "location": 1,
        "image": "https://i.scdn.co/image/ab6761610000e5eb6a29072c320c99c245fe24e2",
        "remaining": {
            "years": -1,
            "months": -4,
            "days": -21
        }
    },
    {
        "id": 13,
        "title": "Duran Duran",
        "date": "Jun 10, 2023",
        "time": 1900,
        "location": 4,
        "image": "https://static.stereogum.com/uploads/2015/09/duranduran.jpg",
        "remaining": {
            "years": -1,
            "months": -4,
            "days": -1
        }
    },
    {
        "id": 14,
        "title": "Madonna",
        "date": "Sep 18, 2023",
        "time": 2030,
        "location": 4,
        "image": "https://yt3.googleusercontent.com/T8Up4YxiN4wGfkyI6J8OyRbQNWiXWv8Lb-I-CjxE9Hi7DyFbcIShXW3i2TqqmXtECcaqlDXk1A=s900-c-k-c0x00ffffff-no-rj",
        "remaining": {
            "years": -1,
            "days": -23
        }
    },
    {
        "id": 15,
        "title": "Depeche Mode",
        "date": "Oct 01, 2023",
        "time": 1900,
        "location": 4,
        "image": "https://i.discogs.com/tiuVvZ5R0TWQDXYr4LabpmOOY_l123e7FoXOXk4y3ck/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI3MjUt/MTY2NTMzMzEyMS0z/OTk4LmpwZWc.jpeg",
        "remaining": {
            "years": -1,
            "days": -10
        }
    }
]

export default events;