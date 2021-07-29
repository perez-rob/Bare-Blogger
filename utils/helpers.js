module.exports = {
  format_dateTime: (date) => {
    // Format date as MM/DD/YYYY
    return (
      date.toLocaleString("en-US", { timeStyle: "medium" }) +
      " - " +
      date.toLocaleString("en-US", { dateStyle: "medium" })
    );
  },

  format_comment_num: (num) => {
    if (num === 0) {
      return "No Comments";
    } else if (num === 1) {
      return " 1 Comment";
    } else {
      return `${num} Comments`;
    }
  },

  truncate_content: (str) => {
    if (str.split(" ").length > 50) {
      return str.split(" ").splice(0, 50).join(" ") + "...";
    } else {
      return str;
    }
  },
};
