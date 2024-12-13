export function courseDetailsConverter({data}){

  const {authorDTO, courseId, courseName, videoIds} = data;

  return {
    "course-title": courseName,
    "course-key": courseId,
    "author-info": typeof authorDTO === "object" ? authorDTO : {},
    "course-contents": Array.isArray(videoIds) ? videoIds : []
  }
}


export function formatUploadedDate(uploadedDate) {
  if (!uploadedDate || uploadedDate.length < 3) return "";

  // Extract year, month, day, and time from the array
  const [year, month, day, hour, minute, second] = uploadedDate;

  // Create a Date object from uploadedDate
  const uploaded = new Date(year, month - 1, day, hour, minute, second);
  const now = new Date();

  // Calculate the time difference in milliseconds
  const diffInMilliseconds = now.getTime() - uploaded.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  // If more than 24 hours, display day, month, and year
  if (diffInHours >= 24) {
    const formattedDate = `${uploaded.getDate()}-${uploaded.toLocaleString("default", {
      month: "short",
    })}-${uploaded.getFullYear()}`;
    return formattedDate;
  }

  // If less than 24 hours, display how many hours ago
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

  if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minutes ago`;
  } else {
    return "just now";
  }
}

export const courseDetails = {
  price: 0,
  free: false,
  summary: "",
  currency: "",
  courseName: "",
  thumbnail: null,
}

export const profileUploadFile = {
  file: null,
}

// // Example usage
// console.log(formatDate(uploadedDate)); // Output: 17/11/2024
