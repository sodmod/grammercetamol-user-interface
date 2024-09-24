export const overLay = document.getElementById("overlays");

export const routePath = {
  landpage: "/",
  "about-us": "about-us",
  contact: "contact",

  auth: {
    login: "/login",
    register: "/register",
  },

  course: {
    courses: "course",
    "view": "view/",
    "watch-course": "watch-course/",
    "your-course": "your-course",
    "whitelisted-course": "whitelisted-course"
  },

  profile: {
    index: "/profile",
    settings: {
      update: "update-profile"
    },
    password: {
      "change-password": "change-password",
      "reset-password": "reset-password"
    }
  }
};

// route name constants
export const routeName = {

  landpage: "Home",
  "about-us": "About Us",
  contact: "Contact",
  profile: "Profile",

  auth: {
    login: "Login",
    register: "Register",
  },

  course: {
    courses: "Courses",
    "watch-course": "Watch Course",
    "upload-course": "Upload course",
  },

  settings: {}
};

export const time = {
  auth: {
    "token-time": 0.00694,
    "refresh-token": 1,
    loggedIn: 0.03125
  },
};

export const navbarContent = [
  {
    dirName: "Courses",
    dir: [
      {
        menu: "Your Courses",
        to: `${routePath.course.courses}/${routePath.course["your-course"]}`
      },
      // todo: this will go to students interface
      {
        "menu": "Whitelisted Courses",
        "to": `${routePath.course.courses}/${routePath.course["whitelisted-course"]}`,
      }
    ],
  },
  {
    dirName: "Profile",
    icon: "",
    dir: [
      {
        "menu": "Settings",
        "to": "registered-course",
      },
      {
        "menu": "My Profile",
        "to": "registered-course",
      }
    ],
  },
];

export const mobileNavContent = [
  {
    dirName: "Courses",
    to: "/courses",
  },
  {
    dirName: "Profile",
    to: "",

  },
  {
    dirName: "Students",
    to: "",

  }, {
    dirName: "Upload",
    to: "",
  },
]

export const homeDir = {
  dirName: "Grammercetamol",
  dir: routePath.landpage
}


export const profilePage = [
  {
    to: routePath.profile.index,
    content: "Profile"
  },
  {
    to: routePath.profile.settings.update,
    content: "Update Profile"
  },
  {
    to: routePath.profile.password["change-password"],
    content: "Change Password"
  }
]
