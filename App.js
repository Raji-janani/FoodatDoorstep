import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   -
 * 
 * Body
 * 
 * 
 * Footer
 * 
 */

const Header = ()=>{
    return(
        <div className="header">
            <div className="headerLogo">
                <img className="logo" src={require("./images/food-logo.png")}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "info": {
          "id": "51835",
          "name": "Aubree",
          "cloudinaryImageId": "65faa4b5046cb2215fe285a8b96c9bd7",
          "locality": "Timmaiah Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹700 for two",
          "cuisines": [
            "Desserts",
            "Bakery"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "3807",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 21:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                "shortDescription": "Perfect cake delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "D",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "696230",
          "name": "ITC Master Chef Creations",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/21/056aad5c-08e5-4fba-9037-850bc6d37055_696230.JPG",
          "locality": "Shivaji Nagar",
          "areaName": "Dispensary Rd",
          "costForTwo": "₹650 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Kebabs",
            "Mediterranean",
            "Mughlai"
          ],
          "avgRating": 4.5,
          "parentId": "11992",
          "avgRatingString": "4.5",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-29 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/itc-master-chef-creations-shivaji-nagar-dispensary-rd-bangalore-696230",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "105167",
          "name": "Bhartiya Jalpan",
          "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
          "locality": "Commercial Street",
          "areaName": "Central Bangalore",
          "costForTwo": "₹270 for two",
          "cuisines": [
            "North Indian",
            "Beverages",
            "Chaat"
          ],
          "avgRating": 4.4,
          "parentId": "7518",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 22:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "OnlyOnSwiggy",
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-commercial-street-central-bangalore-bangalore-105167",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "4046",
          "name": "Sri Udupi Park",
          "cloudinaryImageId": "tfbnpd65irvhp9iwhbtk",
          "locality": "Residency Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Chaat",
            "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "4284",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/sri-udupi-park-residency-road-central-bangalore-bangalore-4046",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "17376",
          "name": "Glen's Bakehouse",
          "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
          "locality": "Lavelle Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Desserts",
            "Bakery",
            "Beverages",
            "Continental",
            "Italian"
          ],
          "avgRating": 4.6,
          "parentId": "3220",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 0.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Gourmet.png",
                "description": "Delivery!"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                "shortDescription": "Perfect cake delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Gourmet.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/glens-bakehouse-lavelle-road-ashok-nagar-bangalore-17376",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "176071",
          "name": "Brahmins' Thatte Idli",
          "cloudinaryImageId": "pe1savupw5miak1g0ylt",
          "locality": "Vyalikaval",
          "areaName": "Malleshwaram",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "1312",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 5.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 21:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "25% OFF",
            "subHeader": "UPTO ₹65"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/brahmins-thatte-idli-vyalikaval-malleshwaram-bangalore-176071",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "12808",
          "name": "A2B - Adyar Ananda Bhavan",
          "cloudinaryImageId": "pdod4o1em9potwsd22rs",
          "locality": "Wilson Garden",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Sweets",
            "Chinese"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "22",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Mithai.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Mithai.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "OnlyOnSwiggy",
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "187384",
          "name": "Blue Tokai Coffee Roasters",
          "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
          "locality": "Infantry Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Cafe",
            "Coffee",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "2682",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 20:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-infantry-road-central-bangalore-bangalore-187384",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "801447",
          "name": "Makhani Darbar",
          "cloudinaryImageId": "c583da4b69d264ffe705e5918fad0e98",
          "locality": "Residency Road Relocation",
          "areaName": "Residency Road",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4,
          "parentId": "478595",
          "avgRatingString": "4.0",
          "totalRatingsString": "4",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/makhani-darbar-relocation-residency-road-bangalore-801447",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "440123",
          "name": "Great Indian Khichdi by EatFit",
          "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
          "locality": "Cunnigham road",
          "areaName": "Vasanth Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Healthy Food",
            "Snacks",
            "Desserts",
            "Rajasthani",
            "South Indian",
            "Maharashtrian",
            "Sweets"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "319582",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-29 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "558773",
          "name": "HRX by EatFit",
          "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
          "locality": "Ali Asker Road",
          "areaName": "Cunningham Road",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Healthy Food",
            "Salads",
            "Keto",
            "Pastas"
          ],
          "avgRating": 4.5,
          "parentId": "335529",
          "avgRatingString": "4.5",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-29 01:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-ali-asker-road-cunningham-road-bangalore-558773",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "160120",
          "name": "Asha Sweet Center - Since 1951",
          "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
          "locality": "Gandhi Bazaar",
          "areaName": "Basavanagudi",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Sweets",
            "Snacks",
            "Fast Food",
            "Bakery",
            "Beverages"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "472555",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 21:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-bangalore-160120",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "461530",
          "name": "Slay Coffee Bar",
          "cloudinaryImageId": "a539ca8b3f7671c90cfea1a12205b113",
          "locality": "Ulsoor",
          "areaName": "Ulsoor",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Cafe",
            "Beverages",
            "Desserts",
            "Bakery",
            "Snacks"
          ],
          "avgRating": 4.4,
          "parentId": "10573",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 5.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-29 01:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/slay-coffee-bar-ulsoor-bangalore-461530",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "435405",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
          "locality": "Cunningham Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets"
          ],
          "avgRating": 4.5,
          "parentId": "281782",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                "description": "Delivery!"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-cunningham-road-central-bangalore-bangalore-435405",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "481803",
          "name": "Peppy Parathas & Rolls By Chai Point",
          "cloudinaryImageId": "isou6i5vq3epvqo1caov",
          "locality": "Ashok Nagar",
          "areaName": "Church Street",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "South Indian",
            "Punjabi",
            "Chaat",
            "Indian",
            "American",
            "Fast Food",
            "Desserts",
            "Cafe",
            "Healthy Food",
            "Home Food",
            "North Indian"
          ],
          "avgRating": 4.9,
          "parentId": "289265",
          "avgRatingString": "4.9",
          "totalRatingsString": "20+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/peppy-parathas-and-rolls-by-chai-point-ashok-nagar-church-street-bangalore-481803",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "237472",
          "name": "Edesia by Freshmenu",
          "cloudinaryImageId": "9c9756c9c390f8b5810542429fd50276",
          "locality": "AGA abdullah Street",
          "areaName": "Richmond Town",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Desserts",
            "Bakery",
            "Fast Food"
          ],
          "avgRating": 4.2,
          "parentId": "11246",
          "avgRatingString": "4.2",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/edesia-by-freshmenu-aga-abdullah-street-richmond-town-bangalore-237472",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "312660",
          "name": "Samosa Party",
          "cloudinaryImageId": "ixgxvfu6ggvw1w1awgr1",
          "locality": "Brigade Road",
          "areaName": "Brigade Road",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Fast Food",
            "Snacks",
            "Beverages",
            "Chaat",
            "North Indian",
            "Street Food",
            "Sweets",
            "Desserts",
            "Punjabi",
            "Bakery"
          ],
          "avgRating": 4.6,
          "parentId": "6364",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 22:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "792448",
          "name": "Suchali's Artisan Bakehouse",
          "cloudinaryImageId": "f9f262d0c80a41de4c1a890eb36d1085",
          "locality": "Shivajinagara",
          "areaName": "Central Bangalore",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "196351",
          "avgRatingString": "4.1",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-28 20:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/suchalis-artisan-bakehouse-shivajinagara-central-bangalore-bangalore-792448",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "409923",
          "name": "Kaati Zone Rolls & Wraps",
          "cloudinaryImageId": "cv0ebvdyhlxscaz5czpe",
          "locality": "Millars Road",
          "areaName": "Vasanth Nagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Fast Food",
            "Bengali",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 3.6,
          "parentId": "248306",
          "avgRatingString": "3.6",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-07-05 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹115",
            "discountTag": "POCKET HERO",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-millars-road-vasanth-nagar-bangalore-409923",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "43836",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
          "locality": "MG Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "630",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-29 02:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
          "type": "WEBLINK"
        }
      }
]

   


const RestaurantCards = (props)=> {
   const {resData} = props;
    return(
       <div class="card-detail">
           <figure>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt=""/>
                <figcaption>
                    <h2 className="res-name">{resData.info.name}</h2>
                     <div className="rating">{resData.info.avgRating}</div>
                    <div className="cuisine">{resData.info.cuisines.join(", ")}</div> 
                    <div>{resData.info.costForTwo}</div>
                </figcaption>
         </figure>
        </div>
    )
}



const Body = () =>{
    return(
        <div className="bodyContent">
            <div className="searchBox">
                {/* <input type="text">Search</input> */}
            </div>
            <div className="res-container">
                    <RestaurantCards  resData = {resList[0]} />
                    <RestaurantCards resData = {resList[1]} />
                    <RestaurantCards resData = {resList[2]} />
                    <RestaurantCards resData = {resList[3]} />
                    <RestaurantCards resData = {resList[4]} />
                    <RestaurantCards resData = {resList[5]} />
                    <RestaurantCards resData = {resList[6]} />
                    <RestaurantCards resData = {resList[7]} />
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);