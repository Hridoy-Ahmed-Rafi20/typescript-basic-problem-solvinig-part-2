type Role = "admin" | "editor" | "viewer";

const canEdit = (role: Role): boolean => {
  let permission;

  if (role === "admin") {
    permission = true;
  } else if (role === "editor") {
    permission = true;
  } else {
    permission = false;
  }

  return permission;
};

canEdit("admin");
canEdit("editor");
canEdit("viewer");
