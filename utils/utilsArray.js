
exports.group = async (objectArray ,property)  => {
    console.log("toolia.utils.group");
    return objectArray.reduce((acc, obj)=> {
      var key = obj[property].alias.valueOf().toString();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {})
  }