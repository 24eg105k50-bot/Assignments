// 1. Validate task title
export function validateTitle(title) {

  if (title.length < 3) {
    return false;
  }
  else {
    return true;
  }

}

// 2. Validate priority
export function validatePriority(priority) {

  if (priority === "low" || priority === "medium" || priority === "high") {
    console.log(true);
    return true;
  }
  else {
    console.log(false);
    return false;
  }

}


// 3. Validate due date
export function validateDueDate(date) {

  if (new Date(date) > new Date()) {
    return true;
  }
  else {
    return false;
  }

}