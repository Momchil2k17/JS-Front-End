function solve(speed, area) {
  let alowed;
  if (area === "city") {
    alowed = 50;
  } else if (area === "residential") {
    alowed = 20;
  } else if (area === "interstate") {
    alowed = 90;
  } else if (area === "motorway") {
    alowed = 130;
  }

  if (speed <= alowed) {
    console.log(`Driving ${speed} km/h in a ${alowed} zone`);
  } else {
    if (speed - alowed <= 20) {
      console.log(
        `The speed is ${
          speed - alowed
        } km/h faster than the allowed speed of ${alowed} - speeding`
      );
    } else if (speed - alowed <= 40) {
      console.log(
        `The speed is ${
          speed - alowed
        } km/h faster than the allowed speed of ${alowed} - excessive speeding`
      );
    } else {
      console.log(
        `The speed is ${
          speed - alowed
        } km/h faster than the allowed speed of ${alowed} - reckless driving`
      );
    }
  }
}
solve(200, "motorway");

