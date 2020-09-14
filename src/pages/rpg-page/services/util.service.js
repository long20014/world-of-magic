/** 
 * Function used to generate a random float number in a range. 
 * @min min value.
 * @max max value.
 * @toFix quantity of decimal number
 */
const getRandomArbitrary = (min, max, toFix) => {
  return (Math.floor(Math.random() * 100) / 100 * (max - min)  + min).toFixed(toFix);
}

/** 
 * Function used to generate a random integer number in a range. 
 * @min min value.
 * @max max value.
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

/** 
 * Function used to replace variables in a string with list of replacements. 
 * @str must follow this pattern: 'A string with {var1} and {var2} etc...'.
 * @replacements a list of replacements for each variable.
 */
const insertVariablesToString = (str, replacements = []) => {
  if (replacements.length && replacements.length > 0) {
    let newStr = str;
    const regex = RegExp('\{var[0-9]+\}', 'g');  
    let target;
    let vars = new Set();
    while ((target = regex.exec(str)) != null) {
      vars.add(target[0]);
    }
    vars = Array.from(vars)
    for (let i=0; i < replacements.length; i++) {      
      const targetRegex = new RegExp(vars[i], 'g');
      newStr = newStr.replace(targetRegex, replacements[i]);
    }    
    return newStr;    
  }  
}

/** 
 * Function used to add a new element to an array if it doesn't exist. 
 * Use this to simulate a set without need to transform back and forth between 
 * set and array
 * @arr array need to add new unique element.
 * @item new unique element to be added
 */
const addUniqueItemToArr = (arr, item) => {  
  if (item) {
    arr = new Set(arr);
    arr = Array.from(arr);
    let isExisted = false;
    const primitiveTypes = ['number', 'string', 'boolean']
    if (primitiveTypes.includes(typeof item)) {
      if (arr.includes(item)) {
        isExisted = true;
      } 
    } else if (typeof item === "object") {      
      for (const elem of arr) {
        if (JSON.stringify(elem) === JSON.stringify(item)) {
          isExisted = true;
          break;
        }
      }      
    } else if (typeof item === 'function') {      
      for (const elem of arr) {
        if (elem.name === item.name) {
          isExisted = true;
          break;
        }
      }      
    }
    if (!isExisted) {
      arr.push(item);
    }
  }
}

/** 
 * Function used to loop and skip some steps in loop. 
 * Use this to get a zigzag like pattern
 * @loop_start position when a loop will start.
 * @loop_end position when a loop will end
 * @do_steps number of loop steps continuously do
 * @skip_steps number of loop steps continuously skip
 * @callBack loop action which can be injected the loop index; 
 */
const skipLoop = (loop_start, loop_end, do_steps, skip_steps, callBack) => { 
  let doSteps = 0;
  let skipSteps = skip_steps;  
  if (loop_start < 0 || loop_end < 1 || (loop_start > loop_end)) {
    console.error('inputs are not valid');
  }
  else if (skip_steps === 0) {
    for (let i = loop_start; i < loop_end; i++) {
      callBack(i);
    }
  }
  else {
    for (let i = loop_start; i < loop_end; i++) { 
      if (doSteps < do_steps)  {
        doSteps++; 
        callBack(i);
      }
      else if (doSteps === do_steps) {
        if (skipSteps > 0) {
          skipSteps--;          
          if (skipSteps === 0) {
            doSteps = 0;
            skipSteps = skip_steps;           
          } 
        }
      }            
    }
  }  
}

/** 
 * Function used to loop and do action at specific steps. 
 * @loop_start position when a loop will start.
 * @loop_end position when a loop will end
 * @executeSteps specific steps that execute callback * 
 * @callBack loop action which can be injected the loop index; 
 */
const jumpLoop = (loop_start, loop_end, executeSteps, callBack) => {
  if (loop_start < 0 || loop_end < 1 || (loop_start > loop_end)) {
    console.error('inputs are not valid');
  }  
  else {  
    let exeSteps = new Set(executeSteps);
    exeSteps = Array.from(exeSteps);    
    exeSteps = exeSteps.sort((a,b) => a - b);
    let stepIndex = 0;
    for (let i = loop_start; i < loop_end; i++) {
      if (i === exeSteps[stepIndex]) {        
        callBack(i);
        stepIndex++;
      }      
    }
  }
}

export default { 
  getRandomArbitrary,
  getRandomInt,
  insertVariablesToString,
  addUniqueItemToArr,
  skipLoop,
  jumpLoop
}