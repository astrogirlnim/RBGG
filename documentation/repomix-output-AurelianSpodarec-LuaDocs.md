This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
_archive-2/
  docs/
    references/
      functions/
        string/
          byte.md
          char.md
          dump.md
          find.md
          format.md
          gmatch.md
          gsub.md
          len.md
          lower.md
          match.md
          packsize.md
          rep.md
          reverse.md
          sub.md
          unpack.md
          upper.md
        utilities/
          assert.md
          collectgarbage.md
          dofile.md
          error.md
          getmetatable.md
          index.md
          ipairs.md
          load.md
          loadfile.md
          next.md
          pairs.md
          pcall.md
          print.md
          rawequal.md
          rawget.md
          rawlen.md
          rawset.md
          require.md
          select.md
          setmetatable.md
          tonumber.md
          tostring.md
          type.md
          xpcall.md
      refactor/
        coroutine.md
        debug.md
        input-and-output-facilities.md
        math.md
        modules.md
        operating-system-facilities.md
        string.md
        utf-8.md
src/
  app/
    docs/
      _components/
        Header.tsx
        Navigation.tsx
      (preface)/
        contribution-guide/
          page.mdx
        faq/
          page.mdx
        governance/
          page.mdx
        introduction/
          page.mdx
      functions/
        coroutine/
          page.mdx
        debug/
          page.mdx
        io/
          page.mdx
        math/
          abs/
            page.mdx
          acos/
            page.mdx
          asin/
            page.mdx
          atan/
            page.mdx
          ceil/
            page.mdx
          cos/
            page.mdx
          deg/
            page.mdx
          exp/
            page.mdx
          floor/
            page.mdx
          fmod/
            page.mdx
          huge/
            page.mdx
          log/
            page.mdx
          max/
            page.mdx
          maxinteger/
            page.mdx
          min/
            page.mdx
          mininteger/
            page.mdx
          modf/
            page.mdx
          pi/
            page.mdx
          rad/
            page.mdx
          random/
            page.mdx
          randomseeds/
            page.mdx
          sin/
            page.mdx
          sqrt/
            page.mdx
          tan/
            page.mdx
          tointeger/
            page.mdx
          type/
            page.mdx
          ult/
            page.mdx
          page.mdx
        os/
          page.mdx
        package/
          page.mdx
        string/
          byte/
            page.mdx
          char/
            page.mdx
          dump/
            page.mdx
          find/
            page.mdx
          format/
            page.mdx
          gmatch/
            page.mdx
          gsub/
            page.mdx
          len/
            page.mdx
          lower/
            page.mdx
          match/
            page.mdx
          pack/
            page.mdx
          packsize/
            page.mdx
          rep/
            page.mdx
          reverse/
            page.mdx
          sub/
            page.mdx
          unpack/
            page.mdx
          upper/
            page.mdx
          page.mdx
        table/
          (methods)/
            concat/
              page.mdx
            insert/
              page.mdx
            move/
              page.mdx
            pack/
              page.mdx
            remove/
              page.mdx
            sort/
              page.mdx
            unpack/
              page.mdx
          (utilities)/
            getmetatable/
              page.mdx
            next/
              page.mdx
            pairs/
              page.mdx
            rawget/
              page.mdx
            rawset/
              page.mdx
            setmetatable/
              page.mdx
          page.mdx
        utf8/
          page.mdx
    layout.tsx
    logo.svg
    not-found.tsx
    page.mdx
    providers.tsx
  components/
    icons/
      BellIcon.tsx
      BoltIcon.tsx
      BookIcon.tsx
      CalendarIcon.tsx
      CartIcon.tsx
      ChatBubbleIcon.tsx
      CheckIcon.tsx
      ChevronRightLeftIcon.tsx
      ClipboardIcon.tsx
      CogIcon.tsx
      CopyIcon.tsx
      DocumentIcon.tsx
      EnvelopeIcon.tsx
      FaceSmileIcon.tsx
      FolderIcon.tsx
      LinkIcon.tsx
      ListIcon.tsx
      MagnifyingGlassIcon.tsx
      MapPinIcon.tsx
      PackageIcon.tsx
      PaperAirplaneIcon.tsx
      PaperClipIcon.tsx
      ShapesIcon.tsx
      ShirtIcon.tsx
      SquaresPlusIcon.tsx
      TagIcon.tsx
      UserIcon.tsx
      UsersIcon.tsx
    Button.tsx
    Code.tsx
    Feedback.tsx
    Footer.tsx
    GridPattern.tsx
    Guides.tsx
    Heading.tsx
    HeroPattern.tsx
    Layout.tsx
    Libraries.tsx
    Logo.tsx
    mdx.tsx
    MobileNavigation.tsx
    Navigation.tsx
    Prose.tsx
    Resources.tsx
    Search.tsx
    SectionProvider.tsx
    table-of-contents.tsx
    Tag.tsx
    ThemeToggle.tsx
  images/
    logos/
      go.svg
      node.svg
      php.svg
      python.svg
      ruby.svg
  lib/
    api.ts
    remToPx.ts
  mdx/
    recma.mjs
    rehype.mjs
    remark.mjs
    search.mjs
  styles/
    0-vendor/
      _tailwind.scss
    2-base/
      _base.scss
      _scrollbars.scss
    3-theming/
      _root.scss
    _cheat.scss
    styles.scss
.eslintrc.json
.gitignore
CHANGELOG.md
LICENSE.md
mdx-components.tsx
next.config.mjs
package.json
postcss.config.js
prettier.config.js
README.md
tsconfig.json
types.d.ts
typography.ts
```

# Files

## File: _archive-2/docs/references/functions/string/byte.md
````markdown
---
  title: string.byte() 
---

The `string.byte` function retrieves the numeric ASCII (or Unicode) value of a character in a string.

### Syntax  
```lua
string.byte(s, start, end_)
```  

### Parameters  
#### `s`

The string from which the ASCII (or Unicode) values of characters will be extracted. 

#### `start (defaults to 1)` 

The starting position in the string to begin retriving character values.

#### `end_ (optional)`  
The ending position in the string up to which character values will be extracted. If omitted, only the value at the `start` position will be returned. (This will **not** return a table,it will return the individual numbers!)

### Examples

#### No ending provided.
```lua
print(string.byte("Hello")) 

-- Output: 72 (ASCII for 'H')
```

#### Ending provided.
```lua
local text = {string.byte("Hello", 1, 5)}

print(table.concat(text, ", ")) 

-- Output: 72, 101, 108, 108, 111
```
````

## File: _archive-2/docs/references/functions/string/char.md
````markdown
---

    title: string.char() 

---

The `string.char` function returns a string containing the characters specified by their numeric ASCII (or Unicode) values.

### Syntax  
```lua
string.char(...)
```  

### Parameters  

#### `...`  
One or more integer values representing ASCII (or Unicode) values of characters.  

### Examples  

#### Basic usage.
```lua
local result = string.char(66, 111, 111)
print(result)

-- Output: Boo
```
````

## File: _archive-2/docs/references/functions/string/dump.md
````markdown
---

    title: string.dump() 

---

The `string.dump` function converts a `function` into a binary string representing its compiled bytecode.

### Syntax  
```lua
string.dump(func, strip)
```  

### Parameters  

#### `func`  
The function to convert into bytecode.  

#### `strip (optional)`  
If `true`, removes debug information from the bytecode. Defaults to `false`.  

### Examples  

#### Basic usage.
```lua
local func = function(a, b)
    return a + b
end

local dumped = string.dump(func)

print(type(dumped)) 

-- Output: string
```
````

## File: _archive-2/docs/references/functions/string/find.md
````markdown
---

    title: string.find() 

---

The `string.find` function searches for a pattern within a string and returns the start and end positions of the first match.

### Syntax  
```lua
string.find(s, pattern, init, plain)
```  

### Parameters  

#### `s`  
The string to search in.  

#### `pattern`  
The pattern to search for.  

#### `init (optional)`  
The starting position for the search. Defaults to `1`.  

#### `plain (optional)`  
If `true`, disables pattern matching and searches for the plain text. Defaults to `false`.  

### Examples  

#### Basic usage.
```lua
local start, finish = string.find("Hello World", "World")
print(start, finish)

-- Output: 7, 11
```  

#### Search with starting position.
```lua
local start, finish = string.find("Hello World", "o", 5)
print(start, finish)

-- Output: 5, 5
```  

#### Plain text search.
```lua
local start, finish = string.find("Hello (World)", "(", 1, true)
print(start, finish)

-- Output: 7 7
```
````

## File: _archive-2/docs/references/functions/string/format.md
````markdown
---

    title: string.format() 

---

The `string.format` function formats strings using a specified template with placeholders.


| Place-holders | Overview                          |
| :---          | :---                              |
| `%d`          | Inserts an integer value.         |
| `%s`          | Inserts a floating point val      |
| `%f`          | Inserts a string value            |

### Syntax  
```lua
string.format(formatstring, ...)
```  

### Parameters  

#### `formatstring`  
The template string containing placeholders.  

#### `...`  
Values to replace the placeholders in the template.  

### Examples  

#### Basic formatting.
```lua
local result = string.format("Hello, %s!", "world!")
print(result)

-- Output: Hello, world!!
```  

#### Number formatting.
```lua
local result = string.format("Pi is approximately %.2f", 3.14159)
print(result)

-- Output: Pi is approximately 3.14
```  

#### Multiple placeholders.
```lua
local result = string.format("%s scored %d points", "Bob", 95)
print(result)

-- Output: Bob scored 95 points
```
````

## File: _archive-2/docs/references/functions/string/gmatch.md
````markdown
---

    title: string.gmatch() 

---

The `string.gmatch` function returns an iterator that yields all matches of a pattern in a string.

### Syntax  
```lua
string.gmatch(s, pattern)
```  

### Parameters  

#### `s`  
The string to search in.  

#### `pattern`  
The pattern to search for.  

### Examples  

#### Basic usage.
```lua
for word in string.gmatch("lua is fun", "%a+") do
    print(word)
end

-- Output:
-- lua
-- is
-- fun
```
````

## File: _archive-2/docs/references/functions/string/gsub.md
````markdown
---

    title: string.gsub() 

---

The `string.gsub` function replaces occurrences of a pattern in a string with a specified replacement.

### Syntax  
```lua
string.gsub(s, pattern, replacement, n)
```  

### Parameters  

#### `s`  
The string to search and replace in.  

#### `pattern`  
The pattern to search for.  

#### `replacement`  
The string or function to replace matches with.  

#### `n (optional)`  
The maximum number of replacements to make. Defaults to replacing all occurrences.  

### Examples  

#### Basic replacement.
```lua
local result = string.gsub("hello world", "world", "lua")
print(result)

-- Output: hello lua
```
````

## File: _archive-2/docs/references/functions/string/len.md
````markdown
---

    title: string.len() 

---

The `string.len` function returns the number of characters in a string.

### Syntax  
```lua
string.len(s)
```  

### Parameters  

#### `s`  
The string to measure.  

### Examples  

#### Basic usage.
```lua
local length = string.len("hello")
print(length)

-- Output: 5
```
````

## File: _archive-2/docs/references/functions/string/lower.md
````markdown
---

    title: string.lower() 

---

The `string.lower` function converts all uppercase letters in a string to lowercase.

### Syntax  
```lua
string.lower(s)
```  

### Parameters  

#### `s`  
The string to convert.  

### Examples  

#### Basic usage.
```lua
local result = string.upper("HELLO WORLD!")
print(result)

-- Output: hello world!
```
````

## File: _archive-2/docs/references/functions/string/match.md
````markdown
---

    title: string.match() 

---

The `string.match` function searches a string for the first match of a pattern and returns it.

| **Pattern**         | **Description**                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| `%a`                | Matches any letter (A-Z, a-z).                                                 |
| `%A`                | Matches any non-letter character.                                              |
| `%d`                | Matches any digit (0-9).                                                       |
| `%D`                | Matches any non-digit character.                                               |
| `%l`                | Matches any lowercase letter (a-z).                                            |
| `%L`                | Matches any non-lowercase letter.                                              |
| `%u`                | Matches any uppercase letter (A-Z).                                            |
| `%U`                | Matches any non-uppercase letter.                                              |
| `%w`                | Matches any alphanumeric character (letters and digits).                       |
| `%W`                | Matches any non-alphanumeric character.                                        |
| `%s`                | Matches any space character (spaces, tabs, newlines).                         |
| `%S`                | Matches any non-space character.                                               |
| `%p`                | Matches any punctuation character.                                             |
| `%P`                | Matches any non-punctuation character.                                         |
| `%x`                | Matches any hexadecimal digit (0-9, A-F, a-f).                                 |
| `%X`                | Matches any non-hexadecimal digit.                                             |
| `%z`                | Matches the null character (`\0`).                                             |
| `.`                 | Matches any character (except newline by default).                             |
| `%`                 | Escape character, used to match special characters like `.` or `%`.            |
| `[set]`             | Matches any character in the set (e.g., `[abc]` matches `a`, `b`, or `c`).     |
| `[^set]`            | Matches any character not in the set (e.g., `[^abc]` matches any except `a, b, c`). |
| `x*`                | Matches 0 or more occurrences of `x`.                                          |
| `x+`                | Matches 1 or more occurrences of `x`.                                          |
| `x-`                | Matches 0 or more occurrences of `x` (as few as possible).                     |
| `x?`                | Matches 0 or 1 occurrence of `x`.                                              |
| `x{n}`              | Matches exactly `n` occurrences of `x`.                                        |
| `x{n,}`             | Matches at least `n` occurrences of `x`.                                       |
| `x{n,m}`            | Matches between `n` and `m` occurrences of `x`.                                |
| `^`                 | Matches the beginning of the string.                                           |
| `$`                 | Matches the end of the string.                                                 |


### Syntax  
```lua
string.match(s, pattern, init)
```  

### Parameters  

#### `s`  
The string to search in.  

#### `pattern`  
The pattern to search for.  

#### `init (optional)`  
The starting position for the search. Defaults to `1`.  

### Return Value  
Returns the first match of the pattern or `nil` if no match is found.

### Examples  

#### Basic usage.
```lua
local result = string.match("hello world", "world")
print(result)

-- Output: world
```  

#### Using patterns.
```lua
local result = string.match("123-456-7890", "%d%d%d")
print(result)

-- Output: 123
```
````

## File: _archive-2/docs/references/functions/string/packsize.md
````markdown
---

    title: string.packsize() 

---

The `string.packsize` function returns the size in bytes required to store a given format.

| **Format Type**  | **Description**                                                                 |
|-------------------|---------------------------------------------------------------------------------|
| `b`               | Signed byte (1 byte).                                                           |
| `B`               | Unsigned byte (1 byte).                                                         |
| `h`               | Signed short (2 bytes).                                                         |
| `H`               | Unsigned short (2 bytes).                                                       |
| `i`               | Signed integer (4 bytes).                                                       |
| `I`               | Unsigned integer (4 bytes).                                                     |
| `l`               | Signed long (4 bytes).                                                          |
| `L`               | Unsigned long (4 bytes).                                                        |
| `f`               | Float (4 bytes).                                                                |
| `d`               | Double (8 bytes).                                                               |
| `s`               | String (variable length, the number is followed by the length of the string).   |
| `c`               | Character (1 byte).                                                             |
| `x`               | Padding (1 byte).                                                               |
| `p`               | Pointer (size varies depending on platform).                                    |
| `n`               | Number (float, 8 bytes).                                                        |

### Syntax  
```lua
string.packsize(format)
```  

### Parameters  

#### `format`  
The format string used to pack data (e.g., "i4", "f", "s1", etc.).  

### Examples  

#### Basic usage.
```lua
local size = string.packsize("i4")
print(size)

-- Output: 4
```  

#### For multiple values.
```lua
local size = string.packsize("i4 f")
print(size)

-- Output: 8
```  

#### For string format.
```lua
local size = string.packsize("s4")
print(size)

-- Output: 4
```  

dadsa.
````

## File: _archive-2/docs/references/functions/string/rep.md
````markdown
---

    title: string.rep() 

---

The `string.rep` function repeats a string a specified number of times.

### Syntax  
```lua
string.rep(s, n, sep)
```  

### Parameters  

#### `s`  
The string to repeat.  

#### `n`  
The number of times to repeat the string.  

#### `sep (optional)`  
A string to insert between repetitions. Defaults to an empty string.  

### Examples  

#### Basic repetition.
```lua
local result = string.rep("lua", 3)
print(result)

-- Output: lualualua
```  

#### Using a separator.
```lua
local result = string.rep("lua", 3, "-")
print(result)

-- Output: lua-lua-lua
```
````

## File: _archive-2/docs/references/functions/string/reverse.md
````markdown
---
    title: string.reverse()
---

Returns a string that is the string s reversed
````

## File: _archive-2/docs/references/functions/string/sub.md
````markdown
---

    title: string.sub() 

---

The `string.sub` function extracts a substring from a string, based on specified start and end positions. So it returns the substring from position `i` to `j`.

### Syntax  
```lua
string.sub(s, i, j)
```  

### Parameters  

#### `s`  
The string to extract from.  

#### `i`  
The starting position of the substring.  

#### `j (optional)`  
The ending position of the substring. Defaults to the end of the string.  

### Examples  

#### Basic usage.
```lua
local result = string.sub("Hello World", 1, 5)
print(result)

-- Output: Hello
```
````

## File: _archive-2/docs/references/functions/string/unpack.md
````markdown
---

    title: string.unpack() 

---

The `string.unpack` function reads values from a binary string based on a specified format, and so returns the unpacked values and the position of the next unread byte.

.
### Syntax  
```lua
string.unpack(format, s, pos)
```  

### Parameters  

#### `format`  
The format string specifying how to interpret the binary data.  

#### `s`  
The binary string to unpack.  

#### `pos (optional)`  
The starting position in the string. Defaults to `1`.  

### Examples  

#### Basic usage.
```lua
local a, b = string.unpack("i4 i4", "\1\0\0\0\2\0\0\0")
print(a, b)

-- Output: 1 2
```
````

## File: _archive-2/docs/references/functions/string/upper.md
````markdown
---

    title: string.upper() 

---

The `string.upper` function converts all lowercase letters in a string to uppercase.

### Syntax  
```lua
string.upper(s)
```  

### Parameters  

#### `s`  
The string to convert.  

### Examples  

#### Basic usage.
```lua
local result = string.upper("hello world!")
print(result)

-- Output: HELLO WORLD!
```
````

## File: _archive-2/docs/references/functions/utilities/assert.md
````markdown
---
  title: assert()
---

The `assert()` function raises an error if the value of its argument `assertValue` is false (i.e., `nil` or `false`); otherwise, it returns all its arguments. In case of an error, `errorMessage` is the error object; when absent, it defaults to "assertion failed!"

**Syntax**  
`assert(assertValue [, errorMessage])`

**Parameters**  
- **`assertValue`**: The value to be asserted; if false, an error will be raised.  
- **`errorMessage`** (optional): The error message to display if the assertion fails.

**Use Cases**  
The `assert()` function is useful for debugging and validating conditions in your code. It helps ensure that certain assumptions hold true during execution. By raising an error when a condition is not met, it prevents further code execution that might rely on that assumption, making it easier to identify issues early in the development process.

**Examples**  

- **When only the value is provided**:  
  If the value is truthy, the function returns the value.

  ```lua
  print(assert(true))  
  -- Output: true
  ```

- **When the value is false**:  
  The function raises an error with the default message.

  ```lua
  print(assert(false))  
  -- Output: lua: ...: assertion failed!
  ```

- **When a message is provided**:  
  If the value is false, the function raises an error with the specified message.

  ```lua
  print(assert(false, "Custom error message"))  
  -- Output: lua: ...: Custom error message
  ```

- **When the value is true and a message is provided**:  
  The function returns the value regardless of the message.

  ```lua
  print(assert(true, "This will not be shown"))  
  -- Output: true
  ```

**Reference**: [lua 5.4 Manual - assert()](https://lua.org/manual/5.4/manual.html#pdf-assert)
````

## File: _archive-2/docs/references/functions/utilities/collectgarbage.md
````markdown
---
  title: collectgarbage()
---

lua performs automatic memory management through garbage collection (GC), meaning you do not need to explicitly allocate or free memory. lua's garbage collector automatically tracks memory usage, identifying and reclaiming memory used by objects that are no longer accessible in the program.

### How It Works

- An object is considered **dead** when the garbage collector determines that it cannot be accessed during the program's normal execution.  
- lua ensures that:
  - Objects still accessible will not be collected.
  - Objects that are truly inaccessible will eventually be collected.  

### Collector Modes

The garbage collector operates in two modes:  
1. **Incremental Mode**: Performs collection in small steps to minimize performance impact.  
2. **Generational Mode**: Optimized for programs with a mix of short-lived and long-lived objects.

You can configure and control garbage collection using the `collectgarbage()` function in lua.

---

### `collectgarbage` Function

The `collectgarbage` function provides a generic interface to lua’s garbage collector. Its behavior depends on the `operation` argument provided.  

#### Syntax  
```lua
collectgarbage(operation [, arg])
```

#### Parameters  
- **`operation`**: A string specifying the desired operation (see options below).  
- **`arg`** (optional): An argument for specific operations (e.g., step size or collector settings).  

---

### Options and Descriptions  

Each `operation` parameter determines the action of the garbage collector:  

#### `"collect"`  
- **Description**: Performs a full garbage collection cycle.  

#### `"stop"`  
- **Description**: Stops automatic garbage collection. The collector will only run when explicitly triggered.  

#### `"restart"`  
- **Description**: Resumes automatic garbage collection after it has been stopped.  

#### `"count"`  
- **Description**: Returns the total memory currently in use by lua, measured in kilobytes (including fractional KB).  

#### `"step"`  
- **Description**: Performs a single step of garbage collection.  
- **Argument**:  
  - `0`: Executes one indivisible step.  
  - Non-zero values simulate the allocation of memory in KB and adjust the step size.  
- **Returns**: `true` if the step completes a garbage collection cycle.  

#### `"isrunning"`  
- **Description**: Checks whether the garbage collector is currently running.  
- **Returns**: `true` if the collector is running; otherwise, `false`.  

#### `"incremental"`  
- **Description**: Changes the garbage collector mode to incremental.  
- **Optional Arguments**:  
  1. **Pause**: Adjusts the garbage collection pause value.  
  2. **Step Multiplier**: Modifies the GC speed relative to memory allocation.  
  3. **Step Size**: Determines the amount of work the GC performs in each step.  

#### `"generational"`  
- **Description**: Changes the garbage collector mode to generational.  
- **Optional Arguments**:  
  1. **Minor Multiplier**: Determines the frequency of collection for short-lived objects.  
  2. **Major Multiplier**: Adjusts the collection frequency for long-lived objects.  

---

### Examples  

#### Using `"count"`  
Retrieve the total memory in use by lua:  
```lua
local memoryUsage = collectgarbage("count")
print(memoryUsage .. " KB")
-- Output: Total memory used by lua.
```

#### Using `"step"`  
Perform a single GC step:  
```lua
local stepCompleted = collectgarbage("step", 10)
print(stepCompleted)
-- Output: true (if the step completed a cycle)
```

#### Switching to Incremental Mode  
Change the garbage collector to incremental mode with specific settings:  
```lua
collectgarbage("incremental", 200, 300, 400)
-- Sets pause to 200, step multiplier to 300, and step size to 400.
```

#### Switching to Generational Mode  
Configure the garbage collector for generational behavior:  
```lua
collectgarbage("generational", 50, 100)
-- Sets minor multiplier to 50 and major multiplier to 100.
```

#### Checking If the Collector Is Running  
Verify the current state of the garbage collector:  
```lua
local isRunning = collectgarbage("isrunning")
print(isRunning)
-- Output: true or false
```

#### Performing Full Collection  
Trigger a full garbage collection cycle:  
```lua
collectgarbage("collect")
print("Garbage collection completed.")
```

#### Stopping and Restarting the Collector  
```lua
collectgarbage("stop")
-- Collector is now stopped.

collectgarbage("restart")
-- Collector is now running again.
```

---

### Use Cases for Garbage Collection  

1. **Monitoring Memory Usage**: Use `"count"` to track memory in real-time and debug memory leaks.  
2. **Performance Optimization**: Adjust garbage collector parameters with `"incremental"` or `"generational"` to reduce performance overhead.  
3. **Manual Control**: Temporarily stop the collector in critical sections of code to avoid interruptions.  

---

### Notes  

- lua’s garbage collection behavior can vary across platforms and lua versions. Optimal settings may not be portable.  
- Objects accessible only through the **C registry** (e.g., global environment) are not collected because lua assumes they might be used by C code.  
- Finalizers can temporarily "resurrect" dead objects, delaying their collection (see §2.5.3 in the lua reference manual).  

**Reference**: [lua 5.4 Manual - collectgarbage()](https://lua.org/manual/5.4/manual.html#pdf-collectgarbage)
````

## File: _archive-2/docs/references/functions/utilities/dofile.md
````markdown
---
  title: dotfile()
---
The `dofile` function in lua executes the contents of a specified file as a lua chunk. It opens the file, runs its code, and returns any values produced by that chunk. If no filename is given, it will read and execute code from standard input (stdin). Unlike some functions, `dofile` does not operate in protected mode, so errors are directly propagated to the caller.

### Syntax  
```lua
dofile([filename])
```

### Parameters  
- **`filename`** *(optional)*: The name of the file to execute. If omitted, `dofile` executes from standard input.

### Behavior  
1. **File Execution**: Executes the contents of the specified file as a lua chunk.
2. **Returns**: Returns all values produced by the executed chunk.
3. **Error Handling**: Errors during execution are propagated to the caller, as `dofile` does not run in protected mode.

### Use Cases  
- Dynamically loading lua code from external files.
- Breaking large scripts into smaller files for modular execution.
- Executing user-provided configurations or scripts.

### Examples  

#### Executing a File  
```lua
-- Assuming 'script.lua' contains:
-- return 1, 2, 3

local a, b, c = dofile("script.lua")
print(a, b, c)  -- Output: 1  2  3
```

#### Error Propagation  
```lua
-- Assuming 'error_script.lua' contains invalid lua code:
-- This will throw an error and stop execution.

local result = dofile("error_script.lua")
-- Output: lua: error_script.lua:1: unexpected symbol
```

#### Reading From Standard Input  
```lua
-- Running dofile() without arguments reads lua code from stdin.
dofile()
-- Input: print("Hello, world!")
-- Output: Hello, world!
```

### Notes  
1. **Unprotected Execution**: Use `pcall` or `xpcall` to handle errors gracefully when using `dofile`.
   ```lua
   local status, err = pcall(dofile, "error_script.lua")
   if not status then
       print("Error:", err)
   end
   ```

2. **File Path**: Ensure the file path is valid; errors will occur if the file cannot be opened.

3. **Chunk Independence**: Variables within the file are local to that chunk unless explicitly made global.

### Comparison With Similar Functions  
- **`loadfile`**: Loads a lua chunk from a file without executing it. Use `loadfile` for later execution.
   ```lua
   local chunk = loadfile("script.lua")
   if chunk then
       chunk()  -- Executes the loaded chunk
   end
   ```

- **`require`**: Loads modules and caches results to prevent re-execution.
   ```lua
   require("module")  -- Loads 'module.lua' only once
   ```

### Summary  
- **Purpose**: Executes lua code from a file or stdin.
- **Usage**: Ideal for dynamic script execution and modularizing large programs.
- **Caution**: Handle errors carefully, as `dofile` does not provide internal error protection.

Reference: [lua 5.4 Manual](https://lua.org/manual/5.4/manual.html#dotfile)
````

## File: _archive-2/docs/references/functions/utilities/error.md
````markdown
---
  title: error()
---

The `error` function in lua raises an error with a specified message as the error object. This function never returns, immediately halting the program unless the error is caught in protected mode (e.g., using `pcall` or `xpcall`). When the error message is a string, `error` adds information about the error position by default. You can customize this behavior using the optional `level` argument.  

---

### Syntax  
```lua
error(message [, level])
```

### Parameters  

- **`message`**:  
  The error message or object. If a string, additional information about the error position may be appended.  

- **`level`** *(optional)*:  
  Specifies how to determine the error position:  
  - **`1` (default)**: The error position is where `error` was called.  
  - **`2`**: Points to where the function that called `error` was called.  
  - **`0`**: Suppresses additional error position information in the message.  

---

### Behavior  

1. **Error Raising**:  
   - Halts execution and propagates the error to the nearest protected call (`pcall` or `xpcall`).  
   - If no protected call is present, the program terminates and displays the error.  

2. **Error Position**:  
   - By default, `error` appends information about the location of the error to the message if it is a string.  

3. **Custom Error Levels**:  
   - You can control how far back in the call stack the error position points by adjusting the `level` argument.  

---

### Use Cases  

- Raising errors when an invalid condition is encountered in your program.  
- Providing detailed feedback when inputs or configurations are incorrect.  
- Debugging by intentionally raising errors with helpful messages.  

---

### Examples  

#### Basic Error Raising  
```lua
error("Something went wrong!")
-- Output: lua: <file>:<line>: Something went wrong!
```

#### Suppressing Error Position Information  
```lua
error("No position info", 0)
-- Output: No position info
```

#### Custom Error Level  
```lua
local function levelTwo()
    error("Error raised at level 2", 2)
end

local function levelOne()
    levelTwo()
end

levelOne()
-- Output: lua: <file>:<line>: Error raised at level 2
-- The line will point to where levelOne() was called, not levelTwo().
```

#### Handling Errors with `pcall`  
```lua
local status, err = pcall(function()
    error("This is a controlled error.")
end)

if not status then
    print("Caught error:", err)
end
-- Output: Caught error: <file>:<line>: This is a controlled error.
```

---

### Notes  

1. **Error Propagation**:  
   Uncaught errors will terminate the program. Always handle errors using `pcall` or `xpcall` when robustness is required.  

2. **Custom Error Objects**:  
   While `message` is often a string, you can pass any lua value. This allows you to use tables or other data structures as error objects.  
   ```lua
   error({code = 404, message = "Not Found"})
   ```

3. **Stack Levels**:  
   Adjusting the `level` argument is particularly useful when creating helper functions that raise errors, as it allows you to point the error to the appropriate context.  

4. **String Concatenation**:  
   If `message` is a string, additional error details (e.g., file and line number) are automatically appended unless `level` is `0`.  

---

### Comparison With Similar Functions  

- **`assert`**:  
  Use `assert` to validate conditions and raise errors when they are not met. Unlike `error`, `assert` is primarily used for inline checks.  
  ```lua
  assert(false, "Assertion failed!")
  -- Output: lua: <file>:<line>: Assertion failed!
  ```

- **`pcall` and `xpcall`**:  
  Use `pcall` or `xpcall` to handle errors raised by `error` or other exceptions gracefully. These functions allow execution to continue after an error.  

---

### Summary  

- **Purpose**: Immediately raises an error and halts program execution unless handled.  
- **Usage**: Best for providing detailed feedback and enforcing program constraints.  
- **Caution**: Be mindful of unhandled errors in production environments; always handle critical errors with `pcall` or similar mechanisms.
````

## File: _archive-2/docs/references/functions/utilities/getmetatable.md
````markdown
---
  title: getmetatable()
---

The `getmetatable` function in lua retrieves the metatable of a given object. If the object does not have a metatable, it returns `nil`. If the metatable contains a `__metatable` field, `getmetatable` returns the value of that field instead of the actual metatable. This function is particularly useful for inspecting or working with metatables while respecting the protections afforded by the `__metatable` field.

### Syntax  
```lua
getmetatable(object)
```

### Parameters  
- **`object`**: The object whose metatable is to be retrieved. This can be any lua value except `nil`.

### Return Values  
- **`nil`**: Returned if the object does not have a metatable.  
- **`value of __metatable`**: If the metatable contains a `__metatable` field, its value is returned instead of the actual metatable.  
- **`metatable`**: If the object has a metatable and no `__metatable` field, the actual metatable is returned.

### Behavior  
1. **Accessing the Metatable**: If the object has a metatable without a `__metatable` field, the metatable is returned.  
2. **Respecting the `__metatable` Field**: If the object's metatable contains a `__metatable` field, `getmetatable` returns the value of this field, which restricts direct access to the metatable.  
3. **No Metatable**: If the object does not have a metatable, `getmetatable` returns `nil`.

### Use Cases  
- Inspecting an object's metatable.  
- Debugging and understanding the behavior of objects that use metatables.  
- Implementing controlled access to metatables using the `__metatable` field.

### Examples  

#### Retrieving a Metatable  
```lua
local tableData = {}
setmetatable(tableData, {key = "value"})

local metatableData = getmetatable(tableData)
print(metatableData.key)  -- Output: value
```

#### No Metatable  
```lua
local tableData = {}
print(getmetatable(tableData))  -- Output: nil
```

#### Using `__metatable` for Protection  
```lua
local tableData = {}
setmetatable(tableData, {__metatable = "Access denied!"})

print(getmetatable(tableData))  -- Output: Access denied!
```

#### Retrieving `__metatable` Value  
```lua
local tableData = {}
setmetatable(tableData, {__metatable = {info = "Protected metatable"}})

local metatableData = getmetatable(tableData)
print(metatableData.info)  -- Output: Protected metatable
```

#### Attempting to Modify a Protected Metatable  
```lua
local tableData = {}
setmetatable(tableData, {__metatable = "Protected metatable"})

-- Uncommenting the following line will raise an error:
-- setmetatable(tableData, {})  -- Error: cannot change a protected metatable
```

### Notes  
1. **Protection via `__metatable`**: The `__metatable` field acts as a safeguard against unwanted access or modification of a metatable. This is useful in designing robust APIs where you want to prevent external interference with the object's behavior.  
2. **No Side Effects**: `getmetatable` does not modify the object or its metatable in any way. It is purely an accessor function.  
3. **Default Behavior**: Objects like tables and userdata can have metatables. However, lua's primitive types like `number`, `string`, and `boolean` do not have metatables by default.  
4. **Combining with `setmetatable`**: The `getmetatable` function is often used in conjunction with `setmetatable` to dynamically inspect and modify object behavior.

### Summary  
- **Purpose**: Retrieve the metatable of an object or return the value of its `__metatable` field if it exists.  
- **Usage**: Ideal for inspecting and debugging objects that use metatables.  
- **Caution**: Respect the `__metatable` field when working with protected metatables to ensure code integrity.
````

## File: _archive-2/docs/references/functions/utilities/index.md
````markdown
## Independent

## Table Functions

## Files

## Error Handling
````

## File: _archive-2/docs/references/functions/utilities/ipairs.md
````markdown
---
  title: iparis()
---

The `ipairs` function in lua provides an iterator for sequentially traversing a table's elements, starting from index `1` and continuing until the first absent or `nil` value is encountered. This function is primarily used for iterating over arrays or tables with numeric, consecutive indices.  

---

### Syntax  
```lua
ipairs(tableData)
```

### Parameters  

- **`tableData`**:  
  A table to be iterated over. The table is expected to have numeric keys starting from `1` in sequence.  

---

### Return Values  

The `ipairs` function returns three values:  
1. **Iterator function**: A function that produces the next index-value pair during iteration.  
2. **Table `t`**: The same table that was passed as input.  
3. **Initial index (0)**: The initial index to start iteration.  

---

### Behavior  

1. **Iteration Process**:  
   - The `ipairs` iterator function produces key-value pairs starting from `(1, tableData[1])`, `(2, tableData[2])`, and so on, until the first absent or `nil` value is encountered.  
   - Iteration stops at the first non-consecutive or missing numeric key.  

2. **Array-Like Tables**:  
   - `ipairs` is ideal for tables that behave like arrays, where indices are numeric and consecutive.  
   - Non-numeric or sparse keys in the table are ignored.  

3. **Automatic Stopping**:  
   - Iteration halts as soon as a `nil` value is found.  

---

### Use Cases  

- Iterating over array-like tables with sequential numeric keys.  
- Safely traversing a list until the first missing or `nil` value.  
- Suitable for scenarios where key-value pairs must be iterated in sequential numeric order.  

---

### Examples  

#### Basic Iteration with `ipairs`  
```lua
local tableData = {10, 20, 30}

for index, value in ipairs(tableData) do
    print(index, value)
end
-- Output:
-- 1   10
-- 2   20
-- 3   30
```

#### Stopping at the First `nil` Value  
```lua
local tableData = {10, 20, nil, 40}

for index, value in ipairs(tableData) do
    print(index, value)
end
-- Output:
-- 1   10
-- 2   20
-- Iteration stops at the `nil` value (index 3).
```

#### Ignoring Non-Numeric Keys  
```lua
local tableData = {10, 20, ["key"] = 30, 40}

for index, value in ipairs(tableData) do
    print(index, value)
end
-- Output:
-- 1   10
-- 2   20
-- Non-numeric keys (e.g., "key") are ignored.
```

#### Table with Gaps  
```lua
local tableData = {10, nil, 30}

for iindex, value in ipairs(tableData) do
    print(inex, value)
end
-- Output:
-- 1   10
-- Iteration stops at the `nil` value (index 2).
```

#### Returning the Iterator  
```lua
local iterator, table, index = ipairs({10, 20, 30})

print(iterator, table, index)
-- Output:
-- function: 0x...  table: 0x...  0
```

#### Using the Iterator Function  
```lua
local tableData = { 10, 20, 30 }
local iterator, currentTable, currentIndex = ipairs(tableData)

currentIndex, currentValue = iterator(currentTable, currentIndex)  -- Moves to the first pair
print(currentIndex, currentValue)                                 -- Output: 1   10

currentIndex, currentValue = iterator(currentTable, currentIndex)  -- Moves to the next pair
print(currentIndex, currentValue)                                 -- Output: 2   20
```

---

### Notes  

1. **Difference from `pairs`**:  
   - `pairs` traverses all key-value pairs in a table, including non-numeric and sparse keys.  
   - `ipairs` only works with numeric, sequential indices and stops at the first gap or `nil`.  

2. **Arrays Only**:  
   - Use `ipairs` for array-like tables. For more general iteration, use `pairs`.  

3. **Immutable Order**:  
   - The order of iteration with `ipairs` is always sequential and numeric.  

4. **Not Suitable for Sparse Tables**:  
   - If the table has gaps or missing indices, `ipairs` stops at the first `nil` value.  

---

### Summary  

- **Purpose**: Sequentially iterate through array-like tables.  
- **Behavior**: Iterates from index `1` to the first absent or `nil` value, ignoring non-numeric keys.  
- **Use Cases**: Ideal for looping over numeric tables with consecutive indices.  
- **Limitations**: Stops at `nil` values, unsuitable for sparse or non-array-like tables.
````

## File: _archive-2/docs/references/functions/utilities/load.md
````markdown
---
  title: load()
---

The `load` function in lua is used to load a chunk of code, either from a string or a function, compiling it into a lua function that can be executed later. This function is essential for dynamically loading and executing lua code at runtime.

---

### Syntax  
```lua
load(chunkData [, chunkName [, mode [, environment]]])
```

### Parameters  

- **`chunkData`**:  
  The code to be loaded. It can either be:  
  - A **string** containing the lua code, or  
  - A **function** that, when called, returns pieces of the lua code as strings.  

- **`chunkName`** (optional):  
  A string that serves as the name of the chunk, primarily for error messages and debugging.  
  Defaults to `chunk` if `chunkData` is a string, or to `="(load)"` otherwise.  

- **`mode`** (optional):  
  A string that controls the type of chunk to load:  
  - `"b"`: Load only binary chunks.  
  - `"t"`: Load only text chunks.  
  - `"bt"`: Load both binary and text chunks (default).  

- **`environment`** (optional):  
  A table that serves as the environment for the loaded chunk. If provided, the first upvalue of the resulting function is set to this value.  

---

### Return Values  

- If the chunk is loaded successfully and has no syntax errors, `load` returns a compiled function.  
- If there are syntax errors, it returns `nil` followed by the error message.  

---

### Behavior  

1. **Loading from String or Function**:  
   - When `chunkData` is a string, the entire string is treated as the lua code to load.  
   - When `chunkData` is a function, `load` calls it repeatedly to gather pieces of the code until it returns an empty string, `nil`, or no value, indicating the end of the chunk.  

2. **Error Handling**:  
   - If the chunk contains syntactical errors, `load` does not execute the code but returns an error message.  

3. **Upvalues and Environments**:  
   - The resulting function has exactly one upvalue, `_ENV`, when loading a main chunk.  
   - For binary chunks, the number of upvalues can vary, and there is no guarantee that the first upvalue is `_ENV`.  
   - If an `environment` table is provided, the first upvalue is initialized with its value; otherwise, it defaults to the global environment. Other upvalues are set to `nil`.  

4. **Mode Control**:  
   - The `mode` parameter specifies whether to load text, binary, or both types of chunks.  

5. **Safety Considerations**:  
   - Although it is safe to load malformed binary chunks (which will return an error), lua does not verify the consistency of the code within binary chunks. Running maliciously crafted bytecode can crash the interpreter.  

---

### Use Cases  

- Dynamically loading lua code from strings or functions at runtime.  
- Loading precompiled binary chunks for performance improvements.  
- Error handling during the loading of potentially unsafe code.  

---

### Examples  

#### Loading a String as a Chunk  
```lua
local compiledFunction, errorMessage = load("return 5 + 3")
if compiledFunction then
    print(compiledFunction())  -- Output: 8
else
    print("Error:", errorMessage)
end
```

#### Handling Syntax Errors  
```lua
local compiledFunction, errorMessage = load("return 5 +")
if not compiledFunction then
    print("Error:", errorMessage)  -- Output: Error: <error message>
end
```

#### Loading a Function that Returns Code  
```lua
local function getChunkData()
    return "return 10 * 2"
end

local compiledFunction, errorMessage = load(getChunkData)
if compiledFunction then
    print(compiledFunction())  -- Output: 20
else
    print("Error:", errorMessage)
end
```

#### Specifying a Chunk Name  
```lua
local compiledFunction, errorMessage = load("return 5 + 5", "my_chunk")
if compiledFunction then
    print(compiledFunction())  -- Output: 10
else
    print("Error:", errorMessage)
end
```

#### Loading Binary Chunks (assuming `binaryChunk` is a valid binary chunk)  
```lua
-- Example of loading a binary chunk
local binaryChunk = "\27lua"  -- This would be an actual binary chunk in practice
local compiledFunction, errorMessage = load(binaryChunk, "my_binary_chunk", "b")
if compiledFunction then
    compiledFunction()  -- Execute the loaded function
else
    print("Error:", errorMessage)
end
```

---

### Notes  

1. **Main vs. Non-Main Chunks**:  
   - When loading a main chunk, the resulting function's first upvalue will always be `_ENV`.  
   - For non-main chunks loaded from binary, the first upvalue may not be `_ENV`.  

2. **Behavior with Malformed Chunks**:  
   - Loading a malformed binary chunk is safe; the `load` function will return an appropriate error message.  

3. **Runtime Environment**:  
   - The environment for the loaded chunk can be controlled using the `environment` parameter, allowing for sandboxing or encapsulation of the loaded code.  

4. **Consistency of Binary Chunks**:  
   - lua does not check the validity of the contents of binary chunks, which could pose security risks if running untrusted code.  

---

### Summary  

- **Purpose**: Load and compile lua code from strings or functions into executable functions.  
- **Behavior**: Supports dynamic loading and provides error handling for syntax issues.  
- **Upvalues**: Allows setting the environment and controlling the number of upvalues.  
- **Security**: Caution is advised when dealing with binary chunks to avoid potential crashes.  
-
````

## File: _archive-2/docs/references/functions/utilities/loadfile.md
````markdown
---
  title: loadfile()
---

## `loadfile()`

The `loadfile` function in lua is used to load a chunk of code from a specified file or from the standard input if no filename is provided. This function is useful for executing lua code stored in external files.

---

### Syntax

```lua
loadfile([filename [, mode [, env]]])
```

### Parameters

- **`filename`** (optional):  
  The name of the file containing the lua code to be loaded. If not provided, `loadfile` reads from standard input (stdin).

- **`mode`** (optional):  
  A string that controls whether the loaded chunk can be text or binary. Possible values are:  
  - **`"b"`**: Load only binary chunks. Binary chunks are precompiled lua code files that are not human-readable and are typically created using the lua compiler. If you try to load a plain text lua script in this mode, it will result in an error.
  - **`"t"`**: Load only text chunks. This mode allows loading plain text lua scripts, which are human-readable and not compiled. If you specify this mode, `loadfile` will reject any binary chunk files.
  - **`"bt"`** (default): Load both binary and text chunks. This is the default behavior, allowing the function to accept either format. If a file is in binary format, it will be loaded as a compiled chunk; if it is in text format, it will be loaded as source code.

- **`env`** (optional):  
  A table that sets the environment for the loaded chunk. If provided, the first upvalue of the resulting function is set to this value.

---

### Return Values

- If the chunk is loaded successfully and has no syntax errors, `loadfile` returns a compiled function.
- If there are syntax errors or the file cannot be opened, it returns `nil` followed by the error message.

---

### Behavior

1. **Loading from File or Standard Input**:  
   - When a `filename` is provided, `loadfile` attempts to load the lua code from that file.
   - If no filename is specified, it reads the lua code from standard input.

2. **Error Handling**:  
   - If the specified file cannot be opened or the chunk contains syntax errors, `loadfile` returns an error message.

3. **Upvalues and Environment**:  
   - The resulting function has one upvalue, `_ENV`, when loading a main chunk.
   - If an `env` table is provided, the first upvalue is initialized with its value; otherwise, it defaults to the global environment.

4. **Mode Control**:  
   - The `mode` parameter determines whether to load text, binary, or both types of chunks.

---

### Use Cases

- Loading and executing lua code from external files.
- Dynamically loading code during runtime based on file input.
- Handling errors gracefully when files cannot be accessed or contain invalid code.

---

### Examples

#### Loading a Chunk from a File

```lua
local loadedFunction, err = loadfile("script.lua")
if loadedFunction then
    loadedFunction()  -- Execute the loaded function
else
    print("Error:", err)
end
```

#### Loading from Standard Input

```lua
print("Enter lua code (press Ctrl+D to end):")
local loadedFunction, err = loadfile()
if loadedFunction then
    loadedFunction()  -- Execute the loaded function
else
    print("Error:", err)
end
```

#### Handling File Not Found

```lua
local loadedFunction, err = loadfile("nonexistent.lua")
if not loadedFunction then
    print("Error:", err)  -- Output: Error: <error message>
end
```

#### Specifying a Mode for the Loaded Chunk

```lua
local loadedFunction, err = loadfile("binary_chunk.luac", "b")
if loadedFunction then
    loadedFunction()  -- Execute the loaded function
else
    print("Error:", err)
end
```

#### Using a Custom Environment

```lua
local customEnv = {x = 10}
setmetatable(customEnv, {__index = _G})  -- Inherit from global environment
local loadedFunction, err = loadfile("script.lua", nil, customEnv)
if loadedFunction then
    loadedFunction()  -- Execute the loaded function with the custom environment
else
    print("Error:", err)
end
```

---

### Notes

1. **Main vs. Non-Main Chunks**:  
   - The resulting function from loading a main chunk will always have `_ENV` as its first upvalue.

2. **Error Handling with Files**:  
   - If the file cannot be opened, `loadfile` will provide an error message indicating the issue.

3. **Flexibility with Environments**:  
   - You can control the environment for the loaded chunk using the `env` parameter, enabling sandboxing or encapsulation of the code.

4. **Safety Considerations**:  
   - Ensure that the loaded files are from trusted sources to avoid potential security risks when executing external code.

---

### Summary

- **Purpose**: Load and compile lua code from a specified file or standard input.
- **Behavior**: Supports error handling for file access issues and syntax errors.
- **Upvalues**: Allows setting the environment for the loaded chunk.
- **Security**: Exercise caution when executing code from external sources to prevent potential risks.
````

## File: _archive-2/docs/references/functions/utilities/next.md
````markdown
---
  title: next()
---

The `next` function in lua is used to iterate over the fields of a table. It allows a program to traverse all the key-value pairs in a table, returning the next index and its associated value. This function is particularly useful for implementing custom iteration over tables.  

---

### Syntax  
```lua
next(table [, index])
```

### Parameters  

- **`table`**:  
  The table to be traversed. This is the only required argument for the function.  

- **`index`** (optional):  
  The index in the table from which to start the iteration. If this argument is `nil`, `next` returns the first key-value pair in the table.  

---

### Return Values  

- If an index is provided, `next` returns the next key and its associated value in the table.  
- If called with `nil` as the index or if the index is absent, it returns the first key-value pair.  
- If there are no more elements in the table, or if the table is empty, `next` returns `nil`.  

---

### Behavior  

1. **Iteration Process**:  
   - When called with `nil` as the second argument, `next` returns the first index and its value from the table.  
   - Subsequent calls to `next` with the last returned index will return `nil`, indicating the end of the iteration.  

2. **Empty Tables**:  
   - You can use `next(table)` to check whether a table is empty. If it returns `nil`, the table has no elements.  

3. **Order of Enumeration**:  
   - The order in which the keys are returned is not specified and may vary. For numerical indices, the order is not guaranteed. To traverse a table in numerical order, use a numerical `for` loop instead.  

4. **Modifying Tables During Traversal**:  
   - You can modify existing fields during traversal, including setting them to `nil`. However, you should not assign values to non-existent fields within the iteration.  

---

### Use Cases  

- Implementing custom table iteration.  
- Checking if a table is empty.  
- Accessing keys and values in a table dynamically.  

---

### Examples  

#### Basic Usage  
```lua
local tableData = {a = 1, b = 2, c = 3}
local key, value = next(tableData)  -- Retrieves the first key-value pair
print(key, value)  -- Output: a 1
```

#### Iterating Over a Table  
```lua
local tableData = {a = 1, b = 2, c = 3}
local key, value = next(tableData)  -- Get the first key-value pair

while key do
    print(key, value)  -- Print current key-value pair
    key, value = next(tableData, key)  -- Get the next key-value pair
end
```

#### Checking for Empty Tables  
```lua
local emptyTable = {}
local key, value = next(emptyTable)

if key == nil then
    print("The table is empty.")  -- Output: The table is empty.
end
```

#### Modifying a Table During Iteration  
```lua
local tableData = {a = 1, b = 2, c = 3}
for key, value in next, tableData do
    if key == "b" then
        tableData[key] = nil  -- Set the field 'b' to nil
    end
end

-- After modification
for k, v in next, tableData do
    print(k, v)  -- Output: a 1, c 3
end
```

---

### Notes  

1. **Non-Specified Order**:  
   - Be cautious when assuming the order of indices when using `next`, as it may not follow any particular order.  

2. **Performance**:  
   - The `next` function is efficient for table iteration, especially when used in loops.  

3. **Empty Tables**:  
   - Always check the return value of `next` to determine if the table is empty or if there are no more elements to iterate through.  

---

### Summary  

- **Purpose**: Iterate over the key-value pairs of a table.  
- **Return Behavior**: Returns the next index and value, or `nil` if there are no more elements.  
- **Modifications**: Allows modifying existing fields but not assigning values to non-existent fields during traversal.  
- **Order**: The order of keys is not guaranteed; use a numerical for loop for ordered iteration.
````

## File: _archive-2/docs/references/functions/utilities/pairs.md
````markdown
---
  title: pairs()
---

The `pairs` function in lua is used to iterate over all key-value pairs in a table. It provides an iterator function that works with any table, allowing developers to traverse the table and access its contents.  

---

### Syntax  
```lua
pairs(tableData)
```

### Parameters  

- **`tableData`**:  
  The table to be traversed. This argument is required.  

---

### Return Values  

- If the table `tableData` has a metamethod `__pairs`, `pairs` calls this metamethod with `tableData` as the argument and returns the first three results from that call.  
- Otherwise, `pairs` returns three values: the `next` function, the table `tableData`, and `nil`. This enables the following construction:  
  ```lua
  for key, value in pairs(tableData) do body end
  ```
  This loop will iterate over all key-value pairs in the table `tableData`.  

---

### Behavior  

1. **Iteration Process**:  
   - The `pairs` function allows for iterating through all key-value pairs in a table. It returns an iterator function, which can be used in a loop to access each key and its associated value.  

2. **Metamethods**:  
   - If the table has a `__pairs` metamethod defined, it is called to retrieve the values for iteration instead of using the default behavior.  

3. **Order of Enumeration**:  
   - The order in which keys are returned is not specified and may vary. This behavior means that the traversal does not guarantee any particular sequence, unlike numerical indices.  

4. **Modifying Tables During Traversal**:  
   - Similar to the `next` function, modifying a table while iterating over it can lead to unexpected behavior. It is generally advised to avoid adding or removing keys during iteration, although existing keys can be modified.  

---

### Use Cases  

- Implementing custom iteration over tables.  
- Accessing all key-value pairs in a table without concern for order.  
- Utilizing metamethods for specialized table behavior during iteration.  

---

### Examples  

#### Basic Usage  
```lua
local tableData = {a = 1, b = 2, c = 3}
for key, value in pairs(tableData) do
    print(key, value)  -- Output: a 1, b 2, c 3 (order may vary)
end
```

#### Using Metamethods  
```lua
local tableData = setmetatable({}, {
    __pairs = function(t)
        return function() return "customKey", "customValue" end
    end
})

for key, value in pairs(tableData) do
    print(key, value)  -- Output: customKey customValue
end
```

#### Checking for Empty Tables  
```lua
local tableData = {}
for key, value in pairs(tableData) do
    print(key, value)  -- This block will not execute
end
print("Table is empty.")  -- Output: Table is empty.
```

#### Modifying a Table During Iteration  
```lua
local tableData = {a = 1, b = 2, c = 3}
for key, value in pairs(tableData) do
    if key == "b" then
        tableData[key] = nil  -- Set the field 'b' to nil
    end
end

-- After modification
for k, v in pairs(tableData) do
    print(k, v)  -- Output: a 1, c 3 (b is not printed)
end
```

---

### Notes  

1. **Non-Specified Order**:  
   - Be cautious when relying on the order of keys when using `pairs`, as the enumeration order is not guaranteed.  

2. **Performance**:  
   - The `pairs` function is efficient for table iteration and is often used in loops.  

3. **Empty Tables**:  
   - If a table is empty, the loop body will not execute, and no errors will occur.  

---

### Summary  

- **Purpose**: Iterate over all key-value pairs in a table.  
- **Return Behavior**: Returns the `next` function, the table, and `nil` for iteration or invokes a metamethod if defined.  
- **Modifications**: Avoid adding or removing keys during iteration to prevent unexpected results.  
- **Order**: The order of keys is not guaranteed; use a numerical for loop for ordered iteration.
````

## File: _archive-2/docs/references/functions/utilities/pcall.md
````markdown
---
  title: pcall()
---

The `pcall` function in lua is used to call another function in protected mode. This means that it safely handles errors that occur during the execution of the function, preventing them from propagating and potentially crashing the program. Instead, it returns a status code and any results from the function or an error message.  

---

### Syntax  
```lua
pcall(f [, arg1, ...])
```

### Parameters  

- **`f`**:  
  The function to be called. This argument is required.  
- **`arg1, ...`**:  
  Additional arguments to be passed to the function `f`. These arguments are optional.  

---

### Return Values  

- **Status Code (boolean)**:  
  The first return value is a boolean that indicates whether the function call succeeded (`true`) or failed (`false`).  
- **Results from the Function (if successful)**:  
  If the call to `f` succeeds without errors, `pcall` returns all results from the function after the status code.  
- **Error Object (if failed)**:  
  If the call to `f` fails due to an error, `pcall` returns `false` followed by the error object (error message).  

---

### Behavior  

1. **Protected Mode**:  
   - The primary purpose of `pcall` is to call a function while preventing errors from propagating up the call stack. This allows developers to handle errors gracefully without terminating the program.  

2. **Error Handling**:  
   - If the function `f` raises an error, `pcall` catches it and returns a `false` status along with the error message. This prevents the program from crashing and allows for custom error handling.  

3. **No Message Handler**:  
   - Unlike regular error handling in lua, errors caught by `pcall` do not invoke a message handler, meaning they do not trigger any custom error functions.  

---

### Use Cases  

- Safely calling functions that may produce errors.  
- Implementing error handling in a lua script without crashing the program.  
- Managing multiple function calls with different potential error sources in a controlled manner.  

---

### Examples  

#### Basic Usage  
```lua
local function successFunction()
    return "Success!"
end

local status, result = pcall(successFunction)
print(status, result)  -- Output: true Success!
```

#### Handling Errors  
```lua
local function errorFunction()
    error("This is an error!")
end

local status, errorMsg = pcall(errorFunction)
print(status, errorMsg)  -- Output: false This is an error!
```

#### Using Arguments  
```lua
local function add(a, b)
    return a + b
end

local status, result = pcall(add, 5, 10)
print(status, result)  -- Output: true 15
```

#### Catching Errors in Multiple Calls  
```lua
local function riskyOperation()
    error("Something went wrong!")
end

local function safeOperation()
    return "All good!"
end

local status1, msg1 = pcall(riskyOperation)
local status2, msg2 = pcall(safeOperation)

print(status1, msg1)  -- Output: false Something went wrong!
print(status2, msg2)  -- Output: true All good!
```

---

### Notes  

1. **Error Handling in lua**:  
   - `pcall` is a crucial function for managing errors in lua, especially in larger applications where unhandled errors can lead to crashes.  

2. **Return Values**:  
   - Always check the first return value of `pcall` to determine whether the call was successful before accessing any additional return values.  

3. **Performance Considerations**:  
   - While `pcall` adds some overhead due to error handling, its benefits in stability and error management often outweigh these costs.  

---

### Summary  

- **Purpose**: Call a function in protected mode to handle errors gracefully.  
- **Return Behavior**: Returns a status code indicating success or failure, followed by the results or error message.  
- **Use Cases**: Safe function calls, error management, and controlled execution of potentially error-prone code.
````

## File: _archive-2/docs/references/functions/utilities/print.md
````markdown
---
  title: print()
---

The `print` function in lua is a simple utility for outputting values to the standard output (stdout). It accepts a variable number of arguments, converts each to a string, and displays them. This function is commonly used for debugging purposes or for quick demonstrations of values.  

---

### Syntax  
```lua
print(...)
```

### Parameters  

- **`...`**:  
  Any number of arguments. These can be of any type, and they will be converted to strings for output.  

---

### Return Values  

- The `print` function does not return any values; its purpose is solely to output to the standard output.  

---

### Behavior  

1. **Conversion to String**:  
   - Each argument passed to `print` is converted to a string using the `tostring` function. This means that values of any type (numbers, tables, booleans, etc.) can be printed.  

2. **Output Format**:  
   - The `print` function outputs the arguments as they are, separated by a space. It does not provide any formatting options; for formatted output, consider using `string.format` or `io.write`.  

3. **Line Break**:  
   - After printing the values, `print` automatically adds a newline character, moving the cursor to the next line for subsequent outputs.  

---

### Use Cases  

- Debugging: Quickly display variable values during development.  
- Demonstration: Show outputs in examples or tutorials.  
- Basic logging: Provide simple console output for applications.  

---

### Examples  

#### Basic Usage  
```lua
print("Hello, World!")  -- Output: Hello, World!
```

#### Printing Multiple Values  
```lua
local a = 10
local b = 20
print("The sum is:", a + b)  -- Output: The sum is: 30
```

#### Printing Different Data Types  
```lua
local str = "lua"
local num = 3.14
local bool = true
print("String:", str, "Number:", num, "Boolean:", bool)  
-- Output: String: lua Number: 3.14 Boolean: true
```

#### Printing Tables  
```lua
local tableData = {x = 1, y = 2}
print("Table:", tableData)  -- Output: Table: table: 0x... (memory address)
```

#### Debugging Example  
```lua
local function debugInfo(var1, var2)
    print("Debugging values:", var1, var2)
end

debugInfo(5, "test")  -- Output: Debugging values: 5 test
```

---

### Notes  

1. **Limitations**:  
   - The `print` function is not designed for formatted output. For formatted strings, use `string.format`.  

2. **Output Redirection**:  
   - By default, `print` sends output to stdout, but this can be redirected in certain environments or through lua's I/O libraries.  

3. **Performance**:  
   - While `print` is suitable for debugging, excessive use in production code can lead to performance issues, particularly in performance-sensitive applications.  

---

### Summary  

- **Purpose**: Output values to standard output for debugging or demonstration.  
- **Return Behavior**: Does not return any values; simply outputs to stdout.  
- **Use Cases**: Debugging, displaying values, and basic logging.
````

## File: _archive-2/docs/references/functions/utilities/rawequal.md
````markdown
---
  title: rawequal()
---

The `rawequal` function in lua is used to check if two values are equal without invoking the `__eq` metamethod. This allows for a strict comparison, ensuring that the equality check is performed without any custom behavior defined by the metatables of the values being compared.  

---

### Syntax  
```lua
rawequal(v1, v2)
```

### Parameters  

- **`v1`**:  
  The first value to compare. This can be of any type.  

- **`v2`**:  
  The second value to compare. This can also be of any type.  

---

### Return Values  

- Returns **`true`** if `v1` is equal to `v2`.  
- Returns **`false`** if `v1` is not equal to `v2`.  

---

### Behavior  

- The `rawequal` function performs a direct comparison of the two values without considering any potential equality metamethods defined in their respective metatables.  

- This function is useful in scenarios where you need to ensure that the comparison is not influenced by custom equality logic that may have been defined by the user.  

---

### Use Cases  

- **Strict Comparison**: When you need to verify that two values are exactly the same in value and type, without any metamethods intervening.  

- **Working with Metatables**: When you are dealing with tables that have custom equality behaviors and want to perform a comparison that ignores these behaviors.  

---

### Examples  

#### Basic Usage  
```lua
local a = {1, 2, 3}
local b = {1, 2, 3}

print(rawequal(a, b))  -- Output: false (different table references)
```

#### Comparing Different Types  
```lua
local num = 10
local str = "10"

print(rawequal(num, str))  -- Output: false (different types)
```

#### Comparing Tables with Metatables  
```lua
local t1 = setmetatable({}, {
    __eq = function() return false end
})
local t2 = setmetatable({}, {
    __eq = function() return true end
})

print(rawequal(t1, t2))  -- Output: false (strict comparison)
```

#### Example with Same References  
```lua
local c = {1, 2, 3}

print(rawequal(a, a))  -- Output: true (same table reference)
```

---

### Notes  

1. **Strict Equality**:  
   - `rawequal` checks for equality based solely on value and type, providing a strict equality comparison that is not affected by user-defined behaviors.  

2. **Type Sensitivity**:  
   - Two values of different types will always return `false`, even if they represent similar data.  

3. **Performance**:  
   - Using `rawequal` can be slightly more efficient than a normal equality check when dealing with tables that have equality metamethods, as it bypasses additional function calls.  

---

### Summary  

- **Purpose**: Check if two values are equal without invoking the `__eq` metamethod.  
- **Return Behavior**: Returns a boolean indicating equality.  
- **Use Cases**: Strict comparisons, working with tables that have custom equality behaviors.
````

## File: _archive-2/docs/references/functions/utilities/rawget.md
````markdown
---
  title: rawget()
---

The `rawget` function in lua retrieves the real value of a specified index from a table without invoking the `__index` metamethod. This allows for direct access to the table's contents, bypassing any custom behaviors defined by the table's metatable.  

---

### Syntax  
```lua
rawget(table, index)
```

### Parameters  

- **`table`**:  
  A table from which to retrieve the value. This parameter must be of type table.  

- **`index`**:  
  The index for which the value is being retrieved. This can be of any lua type, including strings, numbers, or other values.  

---

### Return Values  

- Returns the value associated with `index` in `table`.  
- If `index` does not exist in the table, it returns `nil`.  

---

### Behavior  

- The `rawget` function retrieves the value directly from the specified table, ignoring any `__index` metamethods that may be defined in the table's metatable.  

- This is useful for scenarios where you need to access the raw data in a table without interference from custom behaviors that could alter the expected value.  

---

### Use Cases  

- **Accessing Raw Data**: When you want to retrieve the actual contents of a table without any custom retrieval logic affecting the result.  

- **Working with Metatables**: Useful in situations where you are dealing with tables that have metatables defining custom behaviors, and you need to bypass these behaviors.  

---

### Examples  

#### Basic Usage  
```lua
local myTable = { a = 10, b = 20 }

print(rawget(myTable, 'a'))  -- Output: 10
print(rawget(myTable, 'b'))  -- Output: 20
print(rawget(myTable, 'c'))  -- Output: nil (key does not exist)
```

#### Using with Metatables  
```lua
local mt = {
    __index = function(t, k) return "default" end
}

local myTable = setmetatable({ a = 10 }, mt)

print(rawget(myTable, 'a'))  -- Output: 10 (accesses raw value)
print(rawget(myTable, 'b'))  -- Output: nil (key does not exist)
print(myTable.b)              -- Output: "default" (calls __index metamethod)
```

#### Retrieving from Nested Tables  
```lua
local nestedTable = { subTable = { x = 5, y = 10 } }

print(rawget(nestedTable.subTable, 'x'))  -- Output: 5
print(rawget(nestedTable.subTable, 'y'))  -- Output: 10
print(rawget(nestedTable.subTable, 'z'))  -- Output: nil (key does not exist)
```

---

### Notes  

1. **Direct Access**:  
   - `rawget` provides a means of accessing the true contents of a table, ensuring that the retrieval process is not affected by any potential custom behaviors associated with the table's metatable.  

2. **Return Value**:  
   - If the specified index does not exist, `rawget` will return `nil`, which is important to consider when checking for the existence of values in a table.  

3. **Performance**:  
   - Using `rawget` can be more efficient in certain scenarios where you want to avoid the overhead of metamethod invocations.  

---

### Summary  

- **Purpose**: Retrieve the real value of `table[index]` without invoking the `__index` metamethod.  
- **Return Behavior**: Returns the associated value or `nil` if the index does not exist.  
- **Use Cases**: Accessing raw data, working with tables that have custom behaviors defined by metatables.
````

## File: _archive-2/docs/references/functions/utilities/rawlen.md
````markdown
---
  title: rawlen()
---

The `rawlen` function in lua returns the length of a given object, which can be a table or a string, without invoking the `__len` metamethod. This allows for a direct measurement of the length of the object, bypassing any custom behavior that may be defined for length calculations.  

---

### Syntax  
```lua
rawlen(value)
```

### Parameters  

- **`value`**:  
  The object whose length is to be determined. This can be either a table or a string.  

---

### Return Value  

- Returns an integer representing the length of the object `value`.  
- If `value` is a table, it returns the number of keys in the table.  
- If `value` is a string, it returns the number of characters in the string.  

---

### Behavior  

- The `rawlen` function provides a means to obtain the length of a table or string without invoking the `__len` metamethod, which could potentially alter the expected length.  

- This is particularly useful when you need to ensure that you are getting the actual length without interference from any custom implementations of length measurement.  

---

### Use Cases  

- **Determining Actual Length**: When you need to know the true length of a table or string without any modifications from metamethods.  

- **Debugging**: Useful for debugging purposes to confirm the actual size of a data structure.  

---

### Examples  

#### Using with Strings  
```lua
local myString = "Hello, World!"
print(rawlen(myString))  -- Output: 13 (length of the string)
```

#### Using with Tables  
```lua
local tableData = { a = 1, b = 2, c = 3 }
print(rawlen(tableData))  -- Output: 3 (number of keys in the table)

local anotherTable = {}
print(rawlen(anotherTable))  -- Output: 0 (empty table)
```

#### Using with Metatables  
```lua
local mt = {
    __len = function() return 100 end  -- Custom length behavior
}

local tableData = setmetatable({ a = 1, b = 2 }, mt)

print(rawlen(tableData))  -- Output: 2 (actual number of keys in the table)
```

---

### Notes  

1. **Direct Measurement**:  
   - `rawlen` allows for the retrieval of the length without the influence of custom behaviors defined in a metatable.  

2. **Return Value**:  
   - The return value is always an integer representing the length of the object.  

3. **Types Supported**:  
   - The function only supports tables and strings as valid input types. Passing other types may result in an error or unexpected behavior.  

---

### Summary  

- **Purpose**: Returns the length of the object `value` without invoking the `__len` metamethod.  
- **Return Behavior**: Returns the actual length of the string or the number of keys in the table.  
- **Use Cases**: Determining actual length, debugging data structures.
````

## File: _archive-2/docs/references/functions/utilities/rawset.md
````markdown
---
  title: rawset()
---

The `rawset` function in lua allows you to set the value of a specified index in a table directly, bypassing any `__newindex` metamethod that might be defined for that table. This function is useful when you want to ensure that the value is set without triggering any custom behavior that may be associated with setting values in the table.  

---

### Syntax  
```lua
rawset(table, index, value)
```

### Parameters  

- **`table`**:  
  The table in which the value is to be set. This must be a valid table.  

- **`index`**:  
  The index at which to set the value. This can be any value except `nil` or `NaN`.  

- **`value`**:  
  The value to assign to the specified index in the table. This can be any lua value.  

---

### Return Value  

- Returns the `table` itself after setting the specified index to the provided value.  

---

### Behavior  

- The `rawset` function provides a way to set values in a table without invoking the `__newindex` metamethod.  

- This is particularly useful for directly manipulating tables in situations where you do not want to trigger any custom behavior that may interfere with standard assignment.  

---

### Use Cases  

- **Direct Value Assignment**: When you need to set a value in a table without invoking any metamethods.  

- **Modifying Protected Tables**: Useful for modifying tables that may have restrictions due to custom behavior defined by metamethods.  

---

### Examples  

#### Setting Values in a Table  
```lua
local myTable = {}

rawset(myTable, "key1", "value1")  
print(myTable.key1)  -- Output: value1
```

#### Using with Metatables  
```lua
local mt = {
    __newindex = function(table, key, value)
        print("Attempting to set " .. key .. " to " .. value)  -- Custom behavior
    end
}

local myTable = setmetatable({}, mt)

rawset(myTable, "key2", "value2")  
print(myTable.key2)  -- Output: value2 (sets without invoking __newindex)
```

#### Setting Values with Non-standard Indices  
```lua
local anotherTable = {}

rawset(anotherTable, 5, "fifth value")  
print(anotherTable[5])  -- Output: fifth value

rawset(anotherTable, "name", "example")  
print(anotherTable.name)  -- Output: example
```

---

### Notes  

1. **Direct Manipulation**:  
   - Use `rawset` when you need to manipulate a table directly without the interference of metamethods.  

2. **Return Value**:  
   - The function always returns the original table, allowing for method chaining if desired.  

3. **Index Restrictions**:  
   - The `index` parameter must be a value that is neither `nil` nor `NaN`; otherwise, the function will not behave as expected.  

---

### Summary  

- **Purpose**: Sets the real value of `table[index]` to `value`, without invoking the `__newindex` metamethod.  
- **Return Behavior**: Returns the modified table itself after the assignment.  
- **Use Cases**: Direct value assignment, modifying protected tables.
````

## File: _archive-2/docs/references/functions/utilities/require.md
````markdown
---
  title: require()
---

The `require` function in lua is used to load modules. It checks if the module has already been loaded, finds the appropriate loader if not, and then executes the loader to obtain the module's functionality.

---

### Syntax  
```lua
require(modname)
```

### Parameters  

- **`modname`**:  
  A string representing the name of the module to load. The name is used to identify and locate the module within the package search paths.

---

### Return Values  

- Returns the value stored in `package.loaded[modname]`, which is the result of loading the module.  
- Additionally, it returns the loader data, indicating how the module was found.

---

### Behavior  

1. **Check for Existing Module**:  
   The function first checks `package.loaded` to see if `modname` is already loaded. If it is, it returns the stored value and the loader data without reloading the module.  

2. **Module Search Process**:  
   If the module is not found in `package.loaded`, `require` searches for a loader:
   - It first checks `package.preload[modname]`. If a value is found, it is treated as the loader function.
   - If not found, it looks for a lua loader using the paths specified in `package.path`.
   - If that fails, it searches for a C loader using the paths in `package.cpath`.
   - If all previous attempts fail, it resorts to an all-in-one loader as specified in `package.searchers`.

3. **Loading the Module**:  
   If a loader is found, `require` calls the loader with two arguments: `modname` and additional loader data provided by the searcher.  
   - If the loader returns a non-nil value, that value is assigned to `package.loaded[modname]`.  
   - If the loader does not return a non-nil value and has not assigned a value, `require` assigns `true` to `package.loaded[modname]`.  
   - The final value of `package.loaded[modname]` is returned.

4. **Error Handling**:  
   If any errors occur during loading or execution of the module, or if no loader can be found, `require` raises an error.

---

### Use Cases  

- **Loading Modules**: `require` is essential for organizing code into reusable modules, allowing for better structure and maintainability.  
- **Dependency Management**: It manages module dependencies by ensuring that a module is loaded only once, avoiding duplicate loading.

---

### Examples  

#### Loading a lua Module  
```lua
local myModule = require("myModule")  
-- Loads the module "myModule" and assigns its value to the variable myModule.
```

#### Loading a C Module  
```lua
local myCLibrary = require("myCLibrary")  
-- Loads a C module named "myCLibrary" if available in the specified cpath.
```

#### Handling Errors  
```lua
local status, err = pcall(function()
    return require("nonExistentModule")
end)

if not status then
    print("Error loading module:", err)  -- Output: Error loading module: [error message]
end
```

---

### Notes  

1. **Module Names**:  
   The module name may be subject to transformation based on the search paths configured in `package.path` and `package.cpath`.  

2. **Module Caching**:  
   Modules are cached in `package.loaded` to prevent reloading and to preserve the state of the module across multiple `require` calls.

3. **Customization**:  
   You can customize the behavior of `require` by modifying `package.searchers` to change how modules are located and loaded.

---

### Summary  

- **Purpose**: Loads a specified module and ensures that it is only loaded once.  
- **Return Behavior**: Provides the loaded module's value and loader data.  
- **Use Cases**: Essential for modular programming and dependency management in lua.
````

## File: _archive-2/docs/references/functions/utilities/select.md
````markdown
---
  title: select()
---

The `select` function in lua allows you to retrieve specific arguments from a variable-length argument list. It is particularly useful for managing and accessing the arguments passed to a function, either by specifying an index or by counting the total number of arguments.

---

### Syntax  
```lua
select(index, ...)
```

### Parameters  

- **`index`**:  
  - If it is a **number**, it specifies the starting position in the argument list from which to return subsequent arguments. A positive index counts from the beginning, while a negative index counts from the end (e.g., -1 refers to the last argument).  
  - If it is the **string** `"#"`, it returns the total count of extra arguments received.  

- **`...`**:  
  Represents the variable-length argument list passed to the function.

---

### Return Value  

- If `index` is a number:  
  Returns all arguments after the specified index as separate results.  

- If `index` is `"#"`:  
  Returns the total number of extra arguments received as an integer.

---

### Behavior  

- The `select` function helps in handling optional or variable-length arguments effectively.  
- It provides flexibility in accessing arguments based on their position or counting them.

---

### Use Cases  

- **Retrieving Arguments**: When you need to access only a subset of arguments passed to a function.  
- **Counting Arguments**: When you need to determine how many extra arguments were provided.

---

### Examples  

#### Retrieving Arguments by Positive Index  
```lua
function example(...)
    local arg1, arg2, arg3 = select(2, ...)
    print(arg1, arg2, arg3)  -- Output: second_value third_value
end

example("first_value", "second_value", "third_value")  
```

#### Retrieving Arguments by Negative Index  
```lua
function example(...)
    local last = select(-1, ...)
    print(last)  -- Output: last_value
end

example("first_value", "second_value", "last_value")  
```

#### Counting Arguments  
```lua
function countArguments(...)
    local count = select("#", ...)
    print("Total arguments:", count)  -- Output: Total arguments: 3
end

countArguments("arg1", "arg2", "arg3")  
```

#### Handling Variable-length Arguments  
```lua
function processValues(index, ...)
    local values = {select(index, ...)}
    for i, v in ipairs(values) do
        print("Value " .. i .. ": " .. v)
    end
end

processValues(2, "value1", "value2", "value3")  
-- Output:
-- Value 1: value2
-- Value 2: value3
```

---

### Notes  

1. **Negative Indexing**:  
   - Negative indexing allows you to easily access the last few arguments without needing to know the total count.

2. **Use with Caution**:  
   - When using a positive index, ensure that the index does not exceed the number of arguments passed; otherwise, it may return unexpected results.

3. **String `"#"`**:  
   - Using the string `"#"` to count arguments is a convenient way to assess the length of the argument list.

---

### Summary  

- **Purpose**: Returns arguments based on the specified index or counts the total number of extra arguments.  
- **Return Behavior**: Provides either a subset of arguments or a count of arguments as needed.  
- **Use Cases**: Argument retrieval, argument counting.
````

## File: _archive-2/docs/references/functions/utilities/setmetatable.md
````markdown
---
  title: setmetatable()
---

The `setmetatable` function in lua is used to assign a metatable to a given table, enabling the customization of table behaviors through metamethods.

---

### Syntax  
```lua
setmetatable(table, metatable)
```

### Parameters  

- **`table`**:  
  The table for which you want to set the metatable.

- **`metatable`**:  
  The metatable to be associated with the table. If this parameter is `nil`, it removes the current metatable from the table.

---

### Return Value  

- Returns the original `table` after setting or removing the metatable.

---

### Behavior  

1. **Setting a Metatable**:  
   If the `metatable` parameter is not `nil`, it assigns the specified metatable to the provided table. This allows the table to utilize metamethods defined in the metatable.

2. **Removing a Metatable**:  
   If `metatable` is `nil`, the function removes any existing metatable from the specified table.

3. **Error Handling**:  
   If the original metatable has a `__metatable` field, an error is raised when attempting to change the metatable. This mechanism is used to protect certain tables from modification.

4. **Debugging**:  
   To change the metatable of other lua types (e.g., userdata), you need to use the debug library, as `setmetatable` can only be applied to tables directly.

---

### Use Cases  

- **Customizing Table Behavior**: By defining metamethods (like `__index`, `__newindex`, `__add`, etc.) in the metatable, you can control how the table interacts with operators and functions.

- **Implementing Object-Oriented Programming**: You can use metatables to simulate classes and inheritance in lua, allowing for more structured code.

---

### Examples  

#### Setting a Metatable  
```lua
local myTable = {}
local myMetatable = {
    __index = function(table, key)
        return "Key not found: " .. key
    end
}

setmetatable(myTable, myMetatable)

print(myTable.nonExistentKey)  -- Output: Key not found: nonExistentKey
```

#### Removing a Metatable  
```lua
local anotherTable = {}
setmetatable(anotherTable, { __metatable = "protected" })

-- Attempting to remove the metatable will raise an error
local status, err = pcall(function() 
    setmetatable(anotherTable, nil) 
end)

print(status)  -- Output: false
print(err)     -- Output: [error message about __metatable field]
```

---

### Notes  

1. **Metatables and Protection**: The presence of a `__metatable` field in an existing metatable serves as a safeguard to prevent unauthorized changes, ensuring the integrity of sensitive tables.

2. **Debug Library**: When working with non-table types, such as userdata or threads, you must rely on functions provided by the debug library to manipulate their metatables.

---

### Summary  

- **Purpose**: Sets or removes the metatable of a specified table.  
- **Return Behavior**: Always returns the original table.  
- **Use Cases**: Essential for customizing table behavior and implementing object-oriented design in lua.
````

## File: _archive-2/docs/references/functions/utilities/tonumber.md
````markdown
---
  title: tonumber()
---

The `tonumber` function in lua is used to convert a given value into a number, either from a string or another number type. It offers flexibility in handling different numeric representations, including various bases for numeral conversion.

---

### Syntax  
```lua
tonumber(value [, base])
```

### Parameters  

- **`value`**:  
  The value to be converted into a number. This can be a number or a string.

- **`base`** (optional):  
  An integer that specifies the base of the numeral system to interpret the string `value`. This base can range from 2 to 36.

---

### Return Value  

- Returns the converted number if the conversion is successful. If the conversion fails, it returns `nil`.

---

### Behavior  

1. **Without Base**:  
   - When called without the `base` parameter, `tonumber` attempts to convert `value` to a number. If `value` is already a number or a string that can be interpreted as a number (with possible leading/trailing spaces and a sign), it returns the corresponding numeric value.
   - If `value` cannot be converted, it returns `nil`.

2. **With Base**:  
   - If the `base` parameter is provided, `value` must be a string representing an integer in that base. The `base` can be any integer from 2 to 36.
   - The letters 'A' to 'Z' (and 'a' to 'z') represent values from 10 to 35, respectively.
   - If `value` is not a valid numeral in the specified base, the function returns `nil`.

---

### Use Cases  

- **Converting User Input**: This function is useful for converting user input (typically in string format) into numeric values for calculations.
  
- **Base Conversion**: It can convert strings representing numbers in different bases (binary, octal, hexadecimal, etc.) into their decimal equivalents.

---

### Examples  

#### Basic Conversion  
```lua
print(tonumber("  42  "))  -- Output: 42
print(tonumber("3.14"))     -- Output: 3.14
print(tonumber("abc"))      -- Output: nil
```

#### Conversion with Base  
```lua
print(tonumber("1010", 2))  -- Output: 10 (binary to decimal)
print(tonumber("1A", 16))   -- Output: 26 (hexadecimal to decimal)
print(tonumber("Z", 36))     -- Output: 35 (base 36)
print(tonumber("100", 2))    -- Output: 4 (binary to decimal)
print(tonumber("100", 10))   -- Output: 100 (decimal)
print(tonumber("123", 8))    -- Output: 83 (octal to decimal)
print(tonumber("1G", 16))    -- Output: nil (invalid hexadecimal)
```

---

### Notes  

- **String Formatting**: When converting strings, leading and trailing spaces are ignored, and signs (+ or -) are considered.
  
- **Invalid Input**: If the input string does not conform to the expected numeric format (for example, letters in a base 10 or 16 string), the function will return `nil`.

---

### Summary  

- **Purpose**: Converts a value (number or string) to a number, optionally interpreting it as an integer in a specified base.  
- **Return Behavior**: Returns the converted number or `nil` if conversion fails.  
- **Use Cases**: Ideal for handling numeric input from users and performing base conversions.
````

## File: _archive-2/docs/references/functions/utilities/tostring.md
````markdown
---
  title: tostring()
---

The `tostring` function in lua is used to convert a value of any type into a string representation. It is particularly useful for displaying values in a human-readable format.

---

### Syntax  
```lua
tostring(value)
```

### Parameters  

- **`value`**:  
  The value to be converted to a string. This can be of any lua type, including numbers, tables, functions, and more.

---

### Return Value  

- Returns the string representation of the input value `value`.

---

### Behavior  

1. **Default Conversion**:  
   - If the value `value` is a number, string, boolean, or nil, `tostring` converts it to a string using lua's default conversion rules.

2. **Metatables and Custom Formatting**:  
   - If `value` has a metatable with a `__tostring` field, `tostring` calls the function stored in this field, passing `value` as the argument. The return value from this function is used as the result of `tostring`.
   - If the metatable contains a `__name` field with a string value, this string may be included in the final output of `tostring`.

3. **Full Control**:  
   - For complete control over the formatting of numbers or other types, the `string.format` function should be used instead.

---

### Use Cases  

- **Displaying Values**: This function is often used for printing or logging values in a readable format.
  
- **Debugging**: It helps in debugging by converting complex types, such as tables, into strings that can be easily viewed.

---

### Examples  

#### Basic Usage  
```lua
print(tostring(42))          -- Output: "42"
print(tostring(3.14))        -- Output: "3.14"
print(tostring(true))        -- Output: "true"
print(tostring(nil))         -- Output: "nil"
print(tostring("Hello"))     -- Output: "Hello"
```

#### Using Metatables  
```lua
-- Define a table with a custom __tostring method
local tableData = {}
setmetatable(tableData, {
    __tostring = function(t) 
        return "This is a custom table!"
    end
})

print(tostring(tableData))      -- Output: "This is a custom table!"

-- Define a table with a __name field
local anotherTable = {}
setmetatable(anotherTable, {
    __name = "AnotherTable"
})

print(tostring(anotherTable))  -- Output may include the name based on implementation
```

#### Formatting Numbers  
```lua
-- Using string.format for detailed control
print(string.format("Formatted number: %.2f", 3.14159))  -- Output: "Formatted number: 3.14"
```

---

### Notes  

- **Metatable Behavior**: If both `__tostring` and `__name` fields are present, `__tostring` will take precedence.
  
- **Non-string Results**: If the value does not have a `__tostring` method and is not directly convertible, `tostring` will call the default string conversion behavior for that type.

---

### Summary  

- **Purpose**: Converts any lua value into a human-readable string format.  
- **Return Behavior**: Returns the string representation of the input value.  
- **Use Cases**: Ideal for displaying values for debugging or logging, as well as for providing custom string representations of complex types through metatables.
````

## File: _archive-2/docs/references/functions/utilities/type.md
````markdown
---
  title: type()
---

The `type` function in lua is used to determine the type of a given value. It returns a string that represents the type of the value passed to it.

---

### Syntax  
```lua
type(value)
```

### Parameters  

- **`value`**:  
  The value whose type is to be determined. This can be of any lua type.

---

### Return Value  

- Returns a string representing the type of the input value `value`.

---

### Possible Return Types  

The `type` function can return one of the following strings:  

- **`"nil"`**: Indicates that the value is nil.
- **`"number"`**: Indicates that the value is a number.
- **`"string"`**: Indicates that the value is a string.
- **`"boolean"`**: Indicates that the value is a boolean (true or false).
- **`"table"`**: Indicates that the value is a table.
- **`"function"`**: Indicates that the value is a function.
- **`"thread"`**: Indicates that the value is a coroutine (thread).
- **`"userdata"`**: Indicates that the value is a userdata, which is a mechanism to store C data in lua.

---

### Use Cases  

- **Type Checking**: The `type` function is commonly used to check the type of variables or return values, which can help in ensuring that functions receive arguments of the expected types.
  
- **Debugging**: It aids in debugging by allowing developers to inspect the types of values during execution.

---

### Examples  

#### Basic Usage  
```lua
print(type(nil))          -- Output: "nil"
print(type(42))           -- Output: "number"
print(type("Hello"))      -- Output: "string"
print(type(true))         -- Output: "boolean"
print(type({}))           -- Output: "table"
print(type(function() end)) -- Output: "function"
print(type(coroutine.create(function() end))) -- Output: "thread"
print(type(newproxy()))    -- Output: "userdata"
```

#### Type Checking Example  
```lua
local function checkType(value)
    if type(value) == "number" then
        print("It's a number!")
    elseif type(value) == "string" then
        print("It's a string!")
    else
        print("It's of type: " .. type(value))
    end
end

checkType(10)         -- Output: "It's a number!"
checkType("lua")      -- Output: "It's a string!"
checkType({})         -- Output: "It's of type: table"
```

---

### Notes  

- **Nil Type**: The string returned for the nil value is `"nil"`, which is important to distinguish from the actual `nil` value.
  
- **Userdata Type**: Userdata is a type that allows lua to interface with C data, and its specifics depend on the implementation.

---

### Summary  

- **Purpose**: Determines the type of a given value in lua.  
- **Return Behavior**: Returns a string indicating the type of the input value.  
- **Use Cases**: Useful for type checking, debugging, and ensuring function arguments are of the expected type.
````

## File: _archive-2/docs/references/functions/utilities/xpcall.md
````markdown
---
  title: xpcall()
---

The `xpcall` function in lua is an extended version of `pcall` that allows for error handling with a custom message handler. It provides a way to call a function in protected mode while also specifying how to handle any errors that occur during the execution of that function.

---

### Syntax  
```lua
xpcall(f, message [, arg1, ···])
```

### Parameters  

- **`f`**:  
  The function to be called.

- **`message`**:  
  A message handler function that will be called when an error occurs. This function receives the error message as its argument.

- **`arg1, ···`**:  
  Optional arguments to pass to the function `f`.

---

### Return Value  

- Returns a boolean status code (true if the call succeeded without errors, false otherwise) and any additional results returned by the function `f`, or the error message if an error occurred.

---

### Behavior  

1. **Protected Call**:  
   Similar to `pcall`, `xpcall` invokes the function `f` in protected mode, meaning that errors inside `f` do not propagate but are caught by `xpcall`.

2. **Custom Error Handling**:  
   If an error occurs, `xpcall` calls the provided message handler `message`, passing the error message to it. The handler can format or log the error message as needed.

3. **Returns**:  
   - If the function `f` executes successfully, `xpcall` returns true followed by the results from `f`.
   - If `f` fails, it returns false and the error message.

---

### Use Cases  

- **Error Handling**: `xpcall` is useful for handling errors in a controlled manner, especially in complex applications where custom error reporting is needed.

- **Logging Errors**: The message handler can be used to log errors in a specific format, making it easier to debug issues.

---

### Examples  

#### Basic Usage  
```lua
function faultyFunction()
    error("Something went wrong!")
end

local function errorHandler(err)
    print("Error occurred: " .. err)
end

local status, result = xpcall(faultyFunction, errorHandler)

print(status)  -- Output: false
print(result)  -- Output: "Error occurred: Something went wrong!"
```

#### Custom Error Handling  
```lua
function division(a, b)
    if b == 0 then
        error("Division by zero!")
    end
    return a / b
end

local function errorHandler(err)
    print("Custom Error: " .. err)
end

local status, result = xpcall(function() return division(10, 0) end, errorHandler)

print(status)  -- Output: false
print(result)  -- Output: "Custom Error: Division by zero!"
```

---

### Notes  

- **Custom Message Handler**: The message handler can perform additional operations, such as logging errors to a file or sending alerts.

- **Error Message**: The error message passed to `message` can be modified or formatted as desired within the handler.

---

### Summary  

- **Purpose**: Calls a function in protected mode with a custom error message handler.  
- **Return Behavior**: Returns a boolean status code and either results from the function or the error message.  
- **Use Cases**: Ideal for controlled error handling and custom error logging.
````

## File: _archive-2/docs/references/refactor/coroutine.md
````markdown
---
title: Coroutine
---

`coroutine` is a built in object 

## Description

## Constructor

`coroutine.create()` Creates a new `coroutine` object.

## Functions

This object does not contain specific functions.

## Methods

[`coroutine.create()`](#global-objects_coroutine-method_create)  
[`coroutine.status()`](#global-objects_coroutine-method_status)  
[`coroutine.resume()`](#global-objects_coroutine-method_resume)  
[`coroutine.running()`](#global-objects_coroutine-method_running)  
[`coroutine.wrap()`](#global-objects_coroutine-method_wrap)  
[`coroutine.yield()`](#global-objects_coroutine-method_yield)
````

## File: _archive-2/docs/references/refactor/debug.md
````markdown
---
title: Debug
---

`debug` is a built in object that provides support for debuging.

## Description

## Constructor

## Instance Methods

[`debug.debug()`](#global-objects_debug-method_debug)  
[`debug.gethook()`](#global-objects_debug-method_gethook)  
[`debug.getinfo()`](#global-objects_debug-method_getinfo)  
[`debug.getlocal()`](#global-objects_debug-method_getlocal)  
[`debug.getmetatable()`](#global-objects_debug-method_getmetatable)  
[`debug.getregistry()`](#global-objects_debug-method_getregistry)  
[`debug.getupvalue()`](#global-objects_debug-method_getupvalue)  
[`debug.getuservalue()`](#global-objects_debug-method_getuservalue)  
[`debug.sethook()`](#global-objects_debug-method_sethook)  
[`debug.setlocal()`](#global-objects_debug-method_setlocal)  
[`debug.setmetatable()`](#global-objects_debug-method_setmetable)  
[`debug.setupvalue()`](#global-objects_debug-method_setupvalue)  
[`debug.setuservalue()`](#global-objects_debug-method_setuservalue)  
[`debug.traceback()`](#global-objects_debug-method_traceback)  
[`debug.upvalueid()`](#global-objects_debug-method_upvalueid)  
[`debug.upvaluejoin()`](#global-objects_debug-method_upvaluejoin)  

## Examples
This section provides examples of common os operations in lua.
````

## File: _archive-2/docs/references/refactor/input-and-output-facilities.md
````markdown
---
title: Input and Output Facilities
---

`io` is a built in object that helps manipulating files.

## Description

## Constructor

## Functions
This object does not contain specific functions.

## Instance Methods

[`io.close()`](#global-objects_io-method_close)  
[`io.flush()`](#global-objects_io-method_flush)  
[`io.input()`](#global-objects_io-method_input)  
[`io.lines()`](#global-objects_io-method_lines)  
[`io.open()`](#global-objects_io-method_open)  
[`io.output()`](#global-objects_io-method_output)  
[`io.popen()`](#global-objects_io-method_popen)  
[`io.read()`](#global-objects_io-method_read)  
[`io.stderr()`](#global-objects_io-method_stderr)  
[`io.stdin()`](#global-objects_io-method_stdin)  
[`io.stdout()`](#global-objects_io-method_stdout)  
[`io.tmpfile()`](#global-objects_io-method_tmpfile)  
[`io.type()`](#global-objects_io-method_type)  
[`io.write()`](#global-objects_io-method_write)  

## Example
This section provides examples of common os operations in lua.
````

## File: _archive-2/docs/references/refactor/math.md
````markdown
---
title: Math
---

`math` is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.


## Description  

`math` works with `Numeric` type.

## Static properties  
[`math.pi`](#global-objects_math_static-properties_pi)  
&nbsp;&nbsp;&nbsp;&nbsp; Ratio of a circle's circumference to its diameter; approximately 3.14159. 

[`math.huge`](#global-objects_math_static-properties_huge)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - The float value HUGE_VAL, a value greater than any other numeric value.

## Instance Methods
[`math.abs(x)`](#global-objects_math_methods_abs)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the absolute value of `x`.  

[`math.acos(x)`](#global-objects_math_methods_acos)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the arccosine of `x`.  

[`math.asin(x)`](#global-objects_math_methods_asin)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the arcsine of `x`.  

[`math.atan(x)`](#global-objects_math_methods_atan)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the arctangent of `x`.  

[`math.atan2(y, x)`](#global-objects_math_methods_atan2)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the arctangent of the quotient of its arguments.

[`math.celi(x)`](#global-objects_math_methods_celi)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the smallest integer greater than or equal to `x`.  

[`math.cos(x)`](#global-objects_math_methods_cos)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the cosine of `x`.  

[`math.cosh(x)`](#global-objects_math_methods_cosh)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the hyperbolic cosine of `x`.  

[`math.deg(x)`](#global-objects_math_methods_deg)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Returns the angle `x` (given in radians) in degrees.  

[`math.exp(x)`](#global-objects_math_methods_exp)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns `e^x`, where `x` is the argument, and e is Euler's constant (`2.718…`, the base of the natural logarithm).  

[`math.floor(x)`](#global-objects_math_methods_floor)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the largest integer less than or equal to `x`.

[`math.fmod(x, y)`](#global-objects_math_methods_fmod)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Returns the remainder of the division of x by y that rounds the quotient towards zero.  

[`math.frexp(x)`](#global-objects_math_methods_frexp)  
&nbsp; TODO: Improve -Returns m and e such that x = m2e, e is an integer and the absolute value of m is in the range `[0.5, 1)` `(or ze(or ze(or ze(or ze
o when x is zero)`.  

[`math.ldexp(x, y)`](#global-objects_math_methods_ldexp)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Returns m2e (e should be an integer).  

[`math.logx(x)`](#global-objects_math_methods_log)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the natural logarithm (㏒e; also, ㏑) of `x`.  

[`math.log10(x)`](#global-objects_math_methods_log10)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the base-10 logarithm of `x`.  

[`math.max(x, ..., y)`](#global-objects_math_methods_max)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the largest of zero or more numbers.  

[`math.min(x, ..., y)`](#global-objects_math_methods_min)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the smallest of zero or more numbers.  

[`math.modf(x)`](#global-objects_math_methods_modf)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Returns two numbers, the integral part of x and the fractional part of x.

[`math.pow(x, y)`](#global-objects_math_methods_pow)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns base `x` to the exponent power y (that is, `x^y`).

[`math.rad(x)`](#global-objects_math_methods_rad)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Returns the angle x (given in degrees) in radians.  

[`math.random(x)`](#global-objects_math_methods_random)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns a pseudo-random number between `0` and `1`.  

[`math.randomseed(x)`](#global-objects_math_methods_randomseed)  
&nbsp;&nbsp;&nbsp;&nbsp; TODO: Improve - Sets x as the "seed" for the pseudo-random gene rator: equal seeds produce equal sequences of numbers.  

[`math.sinx(x)`](#global-objects_math_methods_sin)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the sine of `x`.  

[`math.sinh(x)`](#global-objects_math_methods_sinh)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the hyperbolic sine of `x`.  

[`math.sqrt(x)`](#global-objects_math_methods_sqrt)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the positive square root of `x`.  

[`math.tan(x)`](#global-objects_math_methods_tan)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the tangent of `x`.  

[`math.tanh(x)`](#global-objects_math_methods_tanh)  
&nbsp;&nbsp;&nbsp;&nbsp; Returns the hyperbolic tangent of `x`.


## Examples
This section provides examples of common math operations in lua.
````

## File: _archive-2/docs/references/refactor/modules.md
````markdown
---
title: Modules
---

`debug` is a built in object that provides support for debuging.

## Description

## Static properties

[`package.config`](#global-objects_module-static-properties_config)  
[`package.cpath`](#global-objects_module-static-properties_cpath)  
[`package.loaded`](#global-objects_module-static-properties_loaded)  
[`package.path`](#global-objects_module-static-properties_path)  
[`package.preload`](#global-objects_module-static-properties_preload)  
[`package.searchers`](#global-objects_module-static-properties_searchers)  

## Functions

[`require()`](#global-objects_module-functions_require)  

## Instance Methods

[`package.loadlib()`](#global-objects_module-method_loadlib)  
[`package.searchpath()`](#global-objects_module-method_searchpath)
````

## File: _archive-2/docs/references/refactor/operating-system-facilities.md
````markdown
---
title: Operating System Facilities
---

`os` is a built in object that helps accessing the operating system level functions.

## Description

## Constructor

## Functions

This object does not contain specific functions.

## Instance Methods
[`os.clock()`](#global-objects_os-method_clock)  
[`os.date()`](#global-objects_os-method_date)  
[`os.difftime()`](#global-objects_os-method_difftime)  
[`os.execute()`](#global-objects_os-method_execute)  
[`os.exit()`](#global-objects_os-method_exit)  
[`os.getenv()`](#global-objects_os-method_getenv)  
[`os.remove()`](#global-objects_os-method_remove)  
[`os.rename()`](#global-objects_os-method_rename)  
[`os.setlocale()`](#global-objects_os-method_setlocale)  
[`os.time()`](#global-objects_os-method_time)  
[`os.tmpname()`](#global-objects_os-method_tmpname)  

## Example
This section provides examples of common os operations in lua.
````

## File: _archive-2/docs/references/refactor/string.md
````markdown
---
title: String
---

The `String` object is used to represent and manipulate a sequence of characters.

## Description

### Escape Sequences
Special characters can be encoded using escape sequences:

| Escape sequence      | Use                   |
| :---                 | :---                  |
| `\b`                 | Backspace             |
| `\f`                 | Formfeed              |
| `\n`                 | New line              |
| `\r`                 | Carriage return       |
| `\t`                 | Tab                   |
| `\v`                 | Vertical tab          |
| `\\`                 | Backslash             |
| `\"`                 | Double quotes         |
| `\'`                 | Single quotes         |
| `\[`                 | Left square bracket   |
| `\]`                 | Right square bracket  |

## Constructor

## Functions
[`tostring()`](#???_tostring)

## Instance Methods
[`String.byte()`](#global-objects_string-method_byte)  
[`String.char()`](#global-objects_string-method_char)  
[`String.dump()`](#global-objects_string-method_dump)  
[`String.find()`](#global-objects_string-method_find)  
[`String.format()`](#global-objects_string-method_format)  
[`String.gmatch()`](#global-objects_string-method_gmatch)  
[`String.gsub()`](#global-objects_string-method_gsub)  
[`String.len()`](#global-objects_string-method_len)  
[`String.lower()`](#global-objects_string-method_lower)  
[`String.match()`](#global-objects_string-method_match)  
[`String.pack()`](#global-objects_string-method_pack)  
[`String.packsize()`](#global-objects_string-method_packsize)  
[`String.rep()`](#global-objects_string-method_rep)  
[`String.reverse()`](#global-objects_string-method_reverse)  
[`String.sub()`](#global-objects_string-method_sub)  
[`String.unpack()`](#global-objects_string-method_unpack)  
[`String.upper()`](#global-objects_string-method_upper)  

## Examples
````

## File: _archive-2/docs/references/refactor/utf-8.md
````markdown
---
title: UTF-8
---

`utf8` is a built in object that provides basic support for UTF-8 encoding.

## Description

This library does not provide any support for Unicode other than the handling of the encoding.

## Static properties

[`utf8.charpattern`](#global-objects_utf8-static-properties_charpattern)  

## Instance Methods

[`utf8.char()`](#global-objects_utf8-method_char)  
[`utf8.codepoint()`](#global-objects_utf8-method_codepoint)  
[`utf8.codes()`](#global-objects_utf8-method_codes)  
[`utf8.len()`](#global-objects_utf8-method_len)  
[`utf8.offset()`](#global-objects_utf8-method_offset)  

## Examples
This section provides examples of common os operations in lua.
````

## File: src/app/docs/_components/Header.tsx
````typescript
'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(function Header({ className, ...props }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
        'backdrop-blur-xs lg:left-72 xl:left-80 dark:backdrop-blur-sm',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
          'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="/docs">V5.4 Documentation</TopLevelNavItem>
            {/* <TopLevelNavItem href="/docs">Blog</TopLevelNavItem> */}
            {/* <TopLevelNavItem href="/showcase">Showcase</TopLevelNavItem> */}
            <ThemeToggle />
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ul className="flex items-center gap-6">
            <Link href="https://discord.gg/Jp2HFx3KTH" target="_blank">
              <span className="sr-only">Discord</span>
              <svg className="size-5 fill-black/40 dark:fill-gray-400" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <path d='M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485 485 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 338 338 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 310 310 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348 348 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321 321 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391 391 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5m-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3m195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3'></path>
              </svg>
            </Link>
            <Link href="https://github.com/AurelianSpodarec/LuaDocs" target="_blank">
              <span className="sr-only">GitHub</span>
              <svg className='size-5 fill-black/40 dark:fill-gray-400' viewBox='0 0 20 20'>
                <path d='M10 0C4.475 0 0 4.475 0 10a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.3 9.3 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 20 10c0-5.525-4.475-10-10-10'></path>
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  )
})
````

## File: src/app/docs/_components/Navigation.tsx
````typescript
'use client';

export interface INavLink {
  title: string;
  href: string;
}

export interface INavGroup {
  title: string;
  href?: string;
  links: Array<INavLink | { title: string; links: INavLink[] }>;
}

export const navigation: Array<INavGroup> = [
  {
    title: 'Getting started',
    links: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'FAQ', href: '/docs/faq' },
      { title: "Governance", href: "/docs/governance" },
      { title: "Contributing", href: "/docs/contribution-guide" }
    ],
  },
  {
    title: "Table",
    links: [
      {
        title: "Table Methods",
        links: [
          { title: "Table", href: "/docs/functions/table" },
          { title: "Table.Concat()", href: "/docs/functions/table/concat" },
          { title: "Table.Insert()", href: "/docs/functions/table/insert" },
          { title: "Table.Move()", href: "/docs/functions/table/move" },
          { title: "Table.Pack()", href: "/docs/functions/table/pack" },
          { title: "Table.Remove()", href: "/docs/functions/table/remove" },
          { title: "Table.Sort()", href: "/docs/functions/table/sort" },
          { title: "Table.Unpack()", href: "/docs/functions/table/unpack" }
        ]
      },
      {
        title: "Static Utilities",
        links: [
          { title: "setmetatable()", href: "/docs/functions/table/setmetatable" },
          { title: "getmetatable()", href: "/docs/functions/table/getmetatable" },
          { title: "rawset()", href: "/docs/functions/table/rawset" },
          { title: "rawget()", href: "/docs/functions/table/rawget" },
          { title: "pairs()", href: "/docs/functions/table/pairs" },
          { title: "ipairs()", href: "/docs/functions/table/ipairs" },
          { title: "next()", href: "/docs/functions/table/next" }
        ]
      }
    ]
  },
  {
    title: "String",
    links: [
      { title: "String", href: "/docs/functions/string" },
      { title: "string.byte()", href: "/docs/functions/string/byte" },
      { title: "string.char()", href: "/docs/functions/string/char" },
      { title: "string.dump()", href: "/docs/functions/string/dump" },
      { title: "string.find()", href: "/docs/functions/string/find" },
      { title: "string.format()", href: "/docs/functions/string/format" },
      { title: "string.gmatch()", href: "/docs/functions/string/gmatch" },
      { title: "string.gsub()", href: "/docs/functions/string/gsub" },
      { title: "string.len()", href: "/docs/functions/string/len" },
      { title: "string.lower()", href: "/docs/functions/string/lower" },
      { title: "string.match()", href: "/docs/functions/string/match" },
      { title: "string.pack()", href: "/docs/functions/string/pack" },
      { title: "string.packsize()", href: "/docs/functions/string/packsize" },
      { title: "string.rep()", href: "/docs/functions/string/rep" },
      { title: "string.reverse()", href: "/docs/functions/string/reverse" },
      { title: "string.sub()", href: "/docs/functions/string/sub" },
      { title: "string.unpack()", href: "/docs/functions/string/unpack" },
      { title: "string.upper()", href: "/docs/functions/string/upper" }
    ]
  },
  {
    title: "Math",
    links: [
      { title: "Math", href: "/docs/functions/math" },
      { title: "math.abs()", href: "/docs/functions/math/abs" },
      { title: "math.acos()", href: "/docs/functions/math/acos" },
      { title: "math.asin()", href: "/docs/functions/math/asin" },
      { title: "math.atan()", href: "/docs/functions/math/atan" },
      { title: "math.ceil()", href: "/docs/functions/math/ceil" },
      { title: "math.cos()", href: "/docs/functions/math/cos" },
      { title: "math.deg()", href: "/docs/functions/math/deg" },
      { title: "math.exp()", href: "/docs/functions/math/exp" },
      { title: "math.floor()", href: "/docs/functions/math/floor" },
      { title: "math.fmod()", href: "/docs/functions/math/fmod" },
      { title: "math.huge", href: "/docs/functions/math/huge" },
      { title: "math.log()", href: "/docs/functions/math/log" },
      { title: "math.max()", href: "/docs/functions/math/max" },
      { title: "math.maxinteger", href: "/docs/functions/math/maxinteger" },
      { title: "math.min()", href: "/docs/functions/math/min" },
      { title: "math.mininteger", href: "/docs/functions/math/mininteger" },
      { title: "math.modf()", href: "/docs/functions/math/modf" },
      { title: "math.pi", href: "/docs/functions/math/pi" },
      { title: "math.rad()", href: "/docs/functions/math/rad" },
      { title: "math.random()", href: "/docs/functions/math/random" },
      { title: "math.randomseed()", href: "/docs/functions/math/randomseed" },
      { title: "math.sin()", href: "/docs/functions/math/sin" },
      { title: "math.sqrt()", href: "/docs/functions/math/sqrt" },
      { title: "math.tan()", href: "/docs/functions/math/tan" },
      { title: "math.tointeger()", href: "/docs/functions/math/tointeger" },
      { title: "math.type()", href: "/docs/functions/math/type" },
      { title: "math.ult()", href: "/docs/functions/math/ult" }
    ]
  },
  {
    title: "Coroutine",
    links: [
      { title: "Coroutine", href: "/docs/functions/coroutine" },
      { title: "coroutine.close()", href: "/docs/functions/coroutine/close" },
      { title: "coroutine.create()", href: "/docs/functions/coroutine/create" },
      { title: "coroutine.isyieldable()", href: "/docs/functions/coroutine/isyieldable" },
      { title: "coroutine.resume()", href: "/docs/functions/coroutine/resume" },
      { title: "coroutine.running()", href: "/docs/functions/coroutine/running" },
      { title: "coroutine.status()", href: "/docs/functions/coroutine/status" },
      { title: "coroutine.wrap()", href: "/docs/functions/coroutine/wrap" },
      { title: "coroutine.yield()", href: "/docs/functions/coroutine/yield" }
    ]
  },
  {
    title: "IO",
    links: [
      { title: "io", href: "/docs/functions/io" },
      { title: "io.close()", href: "/docs/functions/io/close" },
      { title: "io.flush()", href: "/docs/functions/io/flush" },
      { title: "io.input()", href: "/docs/functions/io/input" },
      { title: "io.lines()", href: "/docs/functions/io/lines" },
      { title: "io.open()", href: "/docs/functions/io/open" },
      { title: "io.output()", href: "/docs/functions/io/output" },
      { title: "io.popen()", href: "/docs/functions/io/popen" },
      { title: "io.read()", href: "/docs/functions/io/read" },
      { title: "io.stderr()", href: "/docs/functions/io/stderr" },
      { title: "io.stdin()", href: "/docs/functions/io/stdin" },
      { title: "io.stdout()", href: "/docs/functions/io/stdout" },
      { title: "io.tmpfile()", href: "/docs/functions/io/tmpfile" },
      { title: "io.type()", href: "/docs/functions/io/type" },
      { title: "io.write()", href: "/docs/functions/io/write" },
      { title: "file:close()", href: "/docs/functions/file/close" },
      { title: "file:flush()", href: "/docs/functions/file/flush" },
      { title: "file:lines()", href: "/docs/functions/file/lines" },
      { title: "file:read()", href: "/docs/functions/file/read" },
      { title: "file:seek()", href: "/docs/functions/file/seek" },
      { title: "file:setvbuf()", href: "/docs/functions/file/setvbuf" },
      { title: "file:write()", href: "/docs/functions/file/write" }
    ]
  },
  {
    title: "OS",
    links: [
      { title: "os", href: "/docs/functions/os" },
      { title: "os.clock()", href: "/docs/functions/os/clock" },
      { title: "os.date()", href: "/docs/functions/os/date" },
      { title: "os.difftime()", href: "/docs/functions/os/difftime" },
      { title: "os.execute()", href: "/docs/functions/os/execute" },
      { title: "os.exit()", href: "/docs/functions/os/exit" },
      { title: "os.getenv()", href: "/docs/functions/os/getenv" },
      { title: "os.remove()", href: "/docs/functions/os/remove" },
      { title: "os.rename()", href: "/docs/functions/os/rename" },
      { title: "os.setlocale()", href: "/docs/functions/os/setlocale" },
      { title: "os.time()", href: "/docs/functions/os/time" },
      { title: "os.tmpname()", href: "/docs/functions/os/tmpname" }
    ]
  },
  {
    title: "Package",
    links: [
      { title: "Package", href: "/docs/functions/package" },
      { title: "package.config()", href: "/docs/functions/package/config" },
      { title: "package.cpath()", href: "/docs/functions/package/cpath" },
      { title: "package.loaded()", href: "/docs/functions/package/loaded" },
      { title: "package.loadlib()", href: "/docs/functions/package/loadlib" },
      { title: "package.path()", href: "/docs/functions/package/path" },
      { title: "package.preload()", href: "/docs/functions/package/preload" },
      { title: "package.searchers()", href: "/docs/functions/package/searchers" },
      { title: "package.searchpath()", href: "/docs/functions/package/searchpath" }
    ]
  },
  {
    title: "Debug",
    links: [
      { title: "Debug", href: "/docs/functions/debug" },
      { title: "debug.debug()", href: "/docs/functions/debug/debug" },
      { title: "debug.gethook()", href: "/docs/functions/debug/gethook" },
      { title: "debug.getinfo()", href: "/docs/functions/debug/getinfo" },
      { title: "debug.getlocal()", href: "/docs/functions/debug/getlocal" },
      { title: "debug.getmetatable()", href: "/docs/functions/debug/getmetatable" },
      { title: "debug.getregistry()", href: "/docs/functions/debug/getregistry" },
      { title: "debug.getupvalue()", href: "/docs/functions/debug/getupvalue" },
      { title: "debug.getuservalue()", href: "/docs/functions/debug/getuservalue" },
      { title: "debug.sethook()", href: "/docs/functions/debug/sethook" },
      { title: "debug.setlocal()", href: "/docs/functions/debug/setlocal" },
      { title: "debug.setmetatable()", href: "/docs/functions/debug/setmetatable" },
      { title: "debug.setupvalue()", href: "/docs/functions/debug/setupvalue" },
      { title: "debug.setuservalue()", href: "/docs/functions/debug/setuservalue" },
      { title: "debug.traceback()", href: "/docs/functions/debug/traceback" },
      { title: "debug.upvalueid()", href: "/docs/functions/debug/upvalueid" },
      { title: "debug.upvaluejoin()", href: "/docs/functions/debug/upvaluejoin" }
    ]
  },
  {
    title: "UTF8",
    links: [
      { title: "utf8", href: "/docs/functions/utf8" },
      { title: "utf8.char()", href: "/docs/functions/utf8/char" },
      { title: "utf8.charpattern()", href: "/docs/functions/utf8/charpattern" },
      { title: "utf8.codepoint()", href: "/docs/functions/utf8/codepoint" },
      { title: "utf8.codes()", href: "/docs/functions/utf8/codes" },
      { title: "utf8.len()", href: "/docs/functions/utf8/len" },
      { title: "utf8.offset()", href: "/docs/functions/utf8/offset" }
    ]
  }
];
````

## File: src/app/docs/(preface)/contribution-guide/page.mdx
````
export const metadata = {
  title: 'Contributing',
  description: '',
}

# Contributing
This is a general contribution guide for [LuaDocs](https://github.com/AurelianSpodarec/LuaDocs) repo. Please read this guide thoroughly before contributing 🙏

Following are some ways to contribute and become part of the lua community.

- Fixing typos in the documentation
- Improving existing docs
- Writing blog posts to educate others in the community
- Help the community in [discord](https://discord.gg/Jp2HFx3KTH) and the discussions forum

## Naming of Position
In Doctosaurus, each file can be assigned a `sidebar_position` to determine its placement in the sidebar navigation. This positioning is essential for maintaining an organized and user-friendly structure.

To ensure flexibility and ease of maintenance, we use increments of 100 for the sidebar positions. This approach prevents us from using single-digit values (e.g., 1, 2), which would make it harder to manage and rearrange the sidebar later on. By using a scale of 100, we can easily insert new files between existing ones by assigning them values that fall between the current positions (e.g., using 100 for the first position and 150 for a new file placed between it and 200).

**Example**
- **Position 1**: 100
- **Position 2**: 200
- **Position to Insert**: 150 (to place a new file between Position 1 and Position 2)

This system allows for clear hierarchy and straightforward adjustments to the sidebar structure without disrupting the overall order.

## Repository setup

1. Start by cloning the repo on your local machine.

    ```sh
    git clone https://github.com/AurelianSpodarec/LuaDocs
    ```

2. Install dependencies on your local. Please do not update any dependencies along with a feature request. If you find stale dependencies, create a separate PR to update them.

   We use `npm` for managing dependencies, therefore do not use `yarn` or any other tool.

    ```sh
    npm install
    ```

3. To start dev server execute the following command.

    ```sh
    npm run start
    ```

## Tools in use

## Commands

## Coding Style
````

## File: src/app/docs/(preface)/faq/page.mdx
````
export const metadata = {
  title: 'FAQ',
  description: '',
}

# FAQ

## Who Maintains LuaDocs?

LuaDocs is an independent project created by [Aurelian Spodarec](https://www.aurelianspodarec.co.uk/) in 2022. The documentation is actively maintained by Aurelian alongside contributions from the community.

Currently, the creator of LuaDocs, [Aurelian Spodarec](https://www.aurelianspodarec.co.uk/), serves as the documentation lead, dedicating part-time effort to maintaining and improving the documentation.

LuaDocs is a labor of passion funded through spare time. If you or your business benefit from LuaDocs, please consider sponsoring us to support the ongoing maintenance of the documentation.

## Is LuaDocs Reliable and Well-Maintained?

LuaDocs is meticulously crafted by referencing the official lua book and providing better, modern examples that are thoroughly tested. Every section in the documentation is linked to the corresponding book chapter, ensuring accuracy and reliability. This structured approach guarantees that the content is both trustworthy and easy to follow for developers.

## Do you have social media? 

Check out the following links to stay connected and up-to-date.

- [Dsicord Server](https://discord.gg/Jp2HFx3KTH)
````

## File: src/app/docs/(preface)/governance/page.mdx
````
export const metadata = {
  title: 'Governance',
  description: '',
}

# Governance

## Roles and responsibilities

Coming soon.

## Monetary Donations
While active contributions are the most valuable form of support, monetary donations are welcomed from those who prefer to contribute financially. 
Businesses relying on LuaDocs for revenue-generating projects are encouraged to sponsor LuaDocs to ensure the documentations remains healthy and actively maintained.
````

## File: src/app/docs/(preface)/introduction/page.mdx
````
export const metadata = {
  title: 'Introduction',
  description: '',
}

# Introduction

## What is LuaDocs?

LuaDocs is an unofficial documentation resource for the lua programming language. It was created to solve the frustrations many developers face when learning lua or navigating the official lua documentation, which is just a book. The official resources, while thorough, can often feel dense and difficult to reference during practical development.

LuaDocs focuses on delivering clear, concise, and modern examples that are easy to understand and apply. Whether you're a newcomer exploring lua for the first time or an experienced developer seeking quick answers, LuaDocs is designed to simplify your journey with practical insights and straightforward explanations.

By bridging the gaps left by the lua book, LuaDocs aims to be the guide that lua developers have always needed.

## Recent releases

Coming soon.

## Sponsors

Be the first sponsor!
````

## File: src/app/docs/functions/coroutine/page.mdx
````
export const metadata = {
  title: 'Coroutine',
  description: '',
}

# Coroutine
````

## File: src/app/docs/functions/debug/page.mdx
````
export const metadata = {
  title: 'Debug',
  description: '',
}

# Debug
````

## File: src/app/docs/functions/io/page.mdx
````
export const metadata = {
  title: 'io',
  description: '',
}

# io
````

## File: src/app/docs/functions/math/abs/page.mdx
````
export const metadata = {
  title: 'math.abs()',
  description: '',
}

The `math.abs()` function in lua returns the absolute value of a number, which is the maximum value between the number `x` and its negation `-x`.

### Syntax  

```lua
math.abs(x)
```

### Parameters  

- `x`  
  A number (integer or float).

### Return value  

The absolute value of `x`. If `x` is negative, it returns `-x` (a non-negative value). If `x` is already non-negative, it returns `x` itself.  

The result is always a non-negative number.  

---

### Description  

`math.abs()` is a static function in lua, and you always call it using `math.abs()` rather than as a method of an object.  

---

### Examples  

#### Using `math.abs()`  

```lua
print(math.abs(-10))       -- 10
print(math.abs(0))         -- 0
print(math.abs(5))         -- 5
print(math.abs(-3.14))     -- 3.14
```

#### Coercion behavior  

`math.abs()` expects a numeric argument. Passing non-numeric values will result in a runtime error.  

```lua
-- Correct usage:
print(math.abs(42))        -- 42

-- Incorrect usage:
-- print(math.abs("string"))  -- Error: bad argument #1 to 'abs' (number expected, got string)
```

---

### See also  

- `math.floor()`  
- `math.ceil()`  
- `math.sqrt()`  
- `math.max()`
````

## File: src/app/docs/functions/math/acos/page.mdx
````
export const metadata = {
  title: 'math.acos()',
  description: '',
}

The `math.acos()` function in lua returns the inverse cosine (in radians) of a number. That is:  

∀ x ∊ [-1, 1], `math.acos(x)` = `arccos(x)` = the unique `y ∊ [0, π]` such that `cos(y) = x`.  

---

### Syntax  

```lua
math.acos(x)
```

### Parameters  

- `x`  
  A number between `-1` and `1` (inclusive), representing the cosine value of an angle.

### Return value  

The inverse cosine of `x`, expressed as an angle in radians between `0` and `π` (inclusive). If `x` is less than `-1` or greater than `1`, the function returns `nil` or may trigger an error, as the value is undefined in these cases.

---

### Description  

Because `math.acos()` is a static function, it is always used as `math.acos()`, rather than as a method of a lua object. This function is typically used to compute the angle corresponding to a given cosine value.

---

### Examples  

#### Using `math.acos()`  

```lua
print(math.acos(-1))       -- 3.1415926535898 (π)
print(math.acos(0))        -- 1.5707963267949 (π/2)
print(math.acos(0.5))      -- 1.0471975511966 (about π/3)
print(math.acos(1))        -- 0
```

#### Handling out-of-range values  

If the input value is outside the range `[-1, 1]`, the result is undefined, and an error or `nil` may occur.

```lua
-- Correct usage:
print(math.acos(0.75))     -- A valid angle in radians

-- Incorrect usage:
-- print(math.acos(2))     -- Error: argument out of range
```

---

### See also  

- `math.asin()`  
- `math.atan()`  
- `math.atan2()`  
- `math.cos()`  
- `math.sin()`  
- `math.tan()`
````

## File: src/app/docs/functions/math/asin/page.mdx
````
export const metadata = {
  title: 'math.asin()',
  description: '',
}

The `math.asin()` function in lua returns the inverse sine (in radians) of a number. That is:  

∀ x ∊ [-1, 1], `math.asin(x)` = `arcsin(x)` = the unique `y ∊ [-π/2, π/2]` such that `sin(y) = x`.  

---

### Syntax  

```lua
math.asin(x)
```

### Parameters  

- `x`  
  A number between `-1` and `1` (inclusive), representing the sine value of an angle.

### Return value  

The inverse sine of `x`, expressed as an angle in radians between `-π/2` and `π/2` (inclusive). If `x` is less than `-1` or greater than `1`, the function returns `nil` or may trigger an error, as the value is undefined in these cases.

---

### Description  

Because `math.asin()` is a static function, it is always used as `math.asin()`, rather than as a method of a lua object. This function is commonly used to compute the angle corresponding to a given sine value.

---

### Examples  

#### Using `math.asin()`  

```lua
print(math.asin(-1))       -- -1.5707963267949 (-π/2)
print(math.asin(0))        -- 0
print(math.asin(0.5))      -- 0.5235987755983 (π/6)
print(math.asin(1))        -- 1.5707963267949 (π/2)
```

#### Handling out-of-range values  

If the input value is outside the range `[-1, 1]`, the result is undefined, and an error or `nil` may occur.

```lua
-- Correct usage:
print(math.asin(0.75))     -- A valid angle in radians

-- Incorrect usage:
-- print(math.asin(2))      -- Error: argument out of range
```

---

### See also  

- `math.acos()`  
- `math.atan()`  
- `math.atan2()`  
- `math.cos()`  
- `math.sin()`  
- `math.tan()`
````

## File: src/app/docs/functions/math/atan/page.mdx
````
export const metadata = {
  title: 'math.atan()',
  description: '',
}

The `math.atan()` function in lua returns the arc tangent of `y/x` (in radians), using the signs of both arguments to determine the quadrant of the result. It also correctly handles the case when `x` is zero.

The default value for `x` is `1`, so calling `math.atan(y)` returns the arc tangent of `y`.

---

### Syntax  

```lua
math.atan(y [, x])
```

### Parameters  

- `y`  
  A number representing the numerator in the tangent calculation.

- `x` (optional)  
  A number representing the denominator in the tangent calculation. If not provided, the default value is `1`.

### Return value  

The inverse tangent (angle in radians) of `y/x`, which lies in the interval `[-π/2, π/2]`. If `x` is zero, the function returns `π/2` if `y` is positive, and `-π/2` if `y` is negative.

---

### Description  

Because `math.atan()` is a static function, it is always used as `math.atan()`, rather than as a method of a lua object. This function can be used to compute angles in the Cartesian coordinate system.

---

### Examples  

#### Using `math.atan()`  

```lua
print(math.atan(1))        -- 0.78539816339745 (π/4)
print(math.atan(0))        -- 0
print(math.atan(-1))       -- -0.78539816339745 (-π/4)

-- Using two parameters
print(math.atan(1, 1))     -- 0.78539816339745 (π/4)
print(math.atan(1, 0))     -- 1.5707963267949 (π/2)
print(math.atan(-1, 0))    -- -1.5707963267949 (-π/2)
```

---

### See also  

- `math.acos()`  
- `math.asin()`  
- `math.atan2()`  
- `math.cos()`  
- `math.sin()`  
- `math.tan()`
````

## File: src/app/docs/functions/math/ceil/page.mdx
````
export const metadata = {
  title: 'math.ceil()',
  description: '',
}

The `math.ceil()` function in lua always rounds up and returns the smallest integer greater than or equal to a given number.

---

### Syntax  

```lua
math.ceil(x)
```

### Parameters  

- `x`  
  A number.

### Return value  

The smallest integer greater than or equal to `x`. It's equivalent to `-math.floor(-x)`.

---

### Description  

Because `math.ceil()` is a static function, it is always used as `math.ceil()`, rather than as a method of a lua object. This function can be useful for rounding up numbers in various calculations.

---

### Examples  

#### Using `math.ceil()`  

```lua
print(math.ceil(-Infinity)) -- -Infinity
print(math.ceil(-7.004))    -- -7
print(math.ceil(-4))        -- -4
print(math.ceil(-0.95))     -- -0
print(math.ceil(-0))        -- -0
print(math.ceil(0))         -- 0
print(math.ceil(0.95))      -- 1
print(math.ceil(4))         -- 4
print(math.ceil(7.004))     -- 8
print(math.ceil(Infinity))   -- Infinity
```

---

### See also  

- `math.abs()`  
- `math.floor()`  
- `math.round()`  
- `math.sign()`  
- `math.trunc()`
````

## File: src/app/docs/functions/math/cos/page.mdx
````
export const metadata = {
  title: 'math.cos()',
  description: '',
}

## `math.cos(x)`

The `math.cos()` function in lua returns the cosine of a number, assuming the number is in radians.

---

### Syntax  

```lua
math.cos(x)
```

### Parameters  

- `x`  
  A number representing an angle in radians.

### Return value  

The cosine of `x`, which is a number between -1 and 1, inclusive. If `x` is `Infinity`, `-Infinity`, or `NaN`, it returns `NaN`.

---

### Description  

Because `math.cos()` is a static function, it is always used as `math.cos()`, rather than as a method of a lua object. This function is useful for performing calculations involving angles in trigonometry.

---

### Examples  

#### Using `math.cos()`  

```lua
print(math.cos(-Infinity))  -- NaN
print(math.cos(-0))         -- 1
print(math.cos(0))          -- 1
print(math.cos(1))          -- 0.5403023058681398
print(math.cos(math.pi))    -- -1
print(math.cos(2 * math.pi)) -- 1
print(math.cos(Infinity))   -- NaN
```

---

### See also  

- `math.acos()`  
- `math.asin()`  
- `math.atan()`  
- `math.atan2()`  
- `math.sin()`  
- `math.tan()`
````

## File: src/app/docs/functions/math/deg/page.mdx
````
export const metadata = {
  title: 'math.exp()',
  description: 'The `math.exp()` function returns the value of e raised to the power of a given number.',
};

# math.exp()

The `math.exp()` function computes the value of the mathematical constant \( e \) (approximately 2.718) raised to the power of a given number. It is commonly used in exponential growth, decay calculations, and other mathematical applications.

## Syntax

```lua
math.exp(`x`)
```

## Parameters

<Properties>
  <Property name="x" type="number">
    A number representing the exponent to which \( e \) is raised.
  </Property>
</Properties>

## Return Value
Returns the result of \( e^x \), where \( e \) is the base of the natural logarithm (approximately 2.718).

- If `x` is `0`, the function returns `1` (since \( e^0 = 1 \)).
- If `x` is a negative number, the function returns the reciprocal of `\( e^{|x|} \)`.
- If `x` is invalid or non-numeric, the function returns `nil`.

## Examples

### Example 1: Basic Exponentiation
Compute `\( e^x \)` for a positive number.

<CodeGroup title="Example 1">
```lua
local result = math.exp(1)
print(result)

-- Output: 2.718281828459
```
</CodeGroup>

### Example 2: Zero as the Exponent
Compute \( e^0 \).

<CodeGroup title="Example 2">
```lua
local result = math.exp(0)
print(result)

-- Output: 1
```
</CodeGroup>

### Example 3: Negative Exponents
Calculate `\( e^{-x} \)` for a negative number.

<CodeGroup title="Example 3">
```lua
local result = math.exp(-1)
print(result)

-- Output: 0.36787944117144
```
</CodeGroup>

### Example 4: Exponentiation with Larger Numbers
Compute `\( e^x \)` for a larger value of `\( x \)`.

<CodeGroup title="Example 4">
```lua
local result = math.exp(5)
print(result)

-- Output: 148.41315910258
```
</CodeGroup>

### Example 5: Small Values of `\( x \)`
Compute \( e^x \) for small positive numbers.

<CodeGroup title="Example 5">
```lua
local result = math.exp(0.1)
print(result)

-- Output: 1.1051709180756
```
</CodeGroup>

## Use Cases
- **Exponential Growth and Decay**: Calculate compound growth or decay over time.
- **Mathematical Modeling**: Solve problems involving the natural exponential function.
- **Logarithms and Inverses**: Use in conjunction with `math.log()` for inverse operations.

## See also
- **`math.log()`**: Calculates the natural logarithm of a number, the inverse of `math.exp()`.
- **`math.pow()`**: Computes the result of raising any base to a power.
- **`math.sqrt()`**: Computes the square root of a number, useful for related calculations.
````

## File: src/app/docs/functions/math/exp/page.mdx
````
export const metadata = {
  title: 'math.exp()',
  description: '',
}

## `math.exp(x)`

The `math.exp()` function in lua returns the value of \( e^x \) (where \( e \) is the base of natural logarithms).

### Syntax  

```lua
math.exp(x)
```

### Parameters  

- `x`  
  A number.

### Return value  

A nonnegative number representing \( e^x \), where \( e \) is the base of the natural logarithm.

### Description  

Because `math.exp()` is a static function, it is always used as `math.exp()`, rather than as a method of a lua object. This function is useful for calculations involving exponential growth or decay.

Beware that \( e \) raised to a number very close to 0 will be very close to 1 and may suffer from loss of precision.

### Examples  

#### Using `math.exp()`  

```lua
print(math.exp(-math.huge))  -- 0
print(math.exp(-1))           -- 0.36787944117144233
print(math.exp(0))            -- 1
print(math.exp(1))            -- 2.718281828459045
print(math.exp(math.huge))    -- Infinity
```

### See also  

- `math.log()`  
- `math.pow()`  
- `math.sqrt()`  
- `math.abs()`
````

## File: src/app/docs/functions/math/floor/page.mdx
````
export const metadata = {
  title: 'math.floor()',
  description: '',
}

The `math.floor()` function returns the largest integer less than or equal to a given number.

### Syntax  

```lua
math.floor(`x`)
```

### Parameters  

- `x`  
  A number.

### Return value  

The largest integer smaller than or equal to `x`. 

### Description  

Because `math.floor()` is a static function, it is always used as `math.floor()`, rather than as a method of a Math object you created (Math is not a constructor).

### Examples  

#### Using `math.floor()`  

```lua
print(math.floor(-math.huge))  -- -Infinity
print(math.floor(-45.95))       -- -46
print(math.floor(-45.05))       -- -46
print(math.floor(0))            -- 0
print(math.floor(4))            -- 4
print(math.floor(45.05))        -- 45
print(math.floor(45.95))        -- 45
print(math.floor(math.huge))     -- Infinity
```

### Specifications  

- **Specification**: lua 5.1 (and later)

### See also  

- `math.abs(x)`  
  Returns the absolute value of `x`.

- `math.ceil(x)`  
  Returns the smallest integer greater than or equal to `x`.

- `math.round(x)`  
  Rounds `x` to the nearest integer (not natively available in lua).

- `math.trunc(x)`  
  Returns the integer portion of `x` (not natively available in lua).
````

## File: src/app/docs/functions/math/fmod/page.mdx
````
export const metadata = {
  title: 'math.fmod()',
  description: '',
}

`math.huge` is a constant in lua that represents the float value `HUGE_VAL`, which is greater than any other numeric value.

### Syntax  

```lua
math.huge
```

### Return value  

The value of `math.huge` is a positive infinity.

### Description  

`math.huge` is a special constant that is used to represent positive infinity. It can be utilized in mathematical calculations to signify an unbounded upper limit.

### Examples  

#### Using `math.huge`  

```lua
print(math.huge)               -- inf
print(math.huge + 1)           -- inf
print(math.huge * 2)           -- inf
print(1 / math.huge)           -- 0
print(math.huge == math.huge)  -- true
```

### See also  

- `math.isinf(x)`  
- `math.isnan(x)`  
- `math.abs(x)`
````

## File: src/app/docs/functions/math/huge/page.mdx
````
export const metadata = {
  title: 'math.huge()',
  description: '',
}

`math.huge` is a constant in lua that represents the float value `HUGE_VAL`, which is greater than any other numeric value.

### Syntax  

```lua
math.huge
```

### Return value  

The value of `math.huge` is a positive infinity.

### Description  

`math.huge` is a special constant that is used to represent positive infinity. It can be utilized in mathematical calculations to signify an unbounded upper limit.

### Examples  

#### Using `math.huge`  

```lua
print(math.huge)               -- inf
print(math.huge + 1)           -- inf
print(math.huge * 2)           -- inf
print(1 / math.huge)           -- 0
print(math.huge == math.huge)  -- true
```

### See also  

- `math.isinf(x)`  
  Checks if `x` is positive or negative infinity.

- `math.isnan(x)`  
  Checks if `x` is NaN (not a number).

- `math.abs(x)`  
  Returns the absolute value of `x`.
````

## File: src/app/docs/functions/math/log/page.mdx
````
export const metadata = {
  title: 'math.log()',
  description: '',
}

The `math.log` function returns the logarithm of a number in the specified base. If no base is provided, it returns the natural logarithm (base e) of the number.

### Syntax  

```lua
math.log(x [, base])
```

### Parameters  

- **x**: A number greater than 0.
- **base** (optional): The base of the logarithm. If not specified, the base is e.

### Return value  

The logarithm of `x` in the specified base. If `x` is ≤ 0, the function returns `NaN`.

### Description  

`math.log` computes the logarithm of `x`. By default, it uses the natural logarithm (base e). To compute the logarithm in a different base, provide the base as the second argument. The relationship for logarithms can be expressed as:

{/* \[
\text{log}_\text{base}(x) = \frac{\text{log}(x)}{\text{log}(\text{base})}
\] */}

### Examples  

#### Using `math.log()`  

```lua
print(math.log(-1))       -- NaN
print(math.log(0))        -- NaN
print(math.log(1))        -- 0
print(math.log(10))       -- 2.302585092994046
print(math.log(math.huge)) -- Infinity
```

#### Using `math.log()` with a different base  

To calculate the logarithm of `y` with base `x`:

```lua
function getBaseLog(x, y)
    return math.log(y) / math.log(x)
end

print(getBaseLog(10, 1000)) -- 2.9999999999999996 (approx. 3)
```

### See also  

- `math.exp()`  
- `math.log1p(x)` 
- `math.log10(x)` 
- `math.log2(x)`  
- `math.pow(base, exp)`
````

## File: src/app/docs/functions/math/max/page.mdx
````
export const metadata = {
  title: 'math.log()',
  description: '',
}

The `math.max` function returns the argument with the maximum value among the provided numbers.

### Syntax  

```lua
math.max(x, ...)
```

### Parameters  

- **x**: A number.
- **...**: Zero or more numbers. The function will return the largest value among these parameters.

### Return value  

The largest of the given numbers. If any parameter is `NaN`, it returns `NaN`. If no parameters are provided, it returns `-inf`.

### Description  

`math.max` compares all the provided arguments using the lua `<` operator to determine which one has the maximum value. It is important to note that if any of the arguments are `NaN` (not a number), the function will return `NaN`.

### Examples  

#### Using `math.max()`

```lua
print(math.max(10, 20))            -- 20
print(math.max(-10, -20))          -- -10
print(math.max(-10, 20))            -- 20
print(math.max())                   -- -inf
print(math.max(10, 20, 30, 5))     -- 30
print(math.max(5, math.huge))      -- Infinity
print(math.max(1/0, -1/0))         -- Infinity
print(math.max(10, math.nan))      -- NaN
```

#### Getting the maximum element of a table  

You can use a loop to find the maximum value in a numeric table:

```lua
function getMaxOfTable(numTable)
    local maxVal = -math.huge
    for _, v in ipairs(numTable) do
        maxVal = math.max(maxVal, v)
    end
    return maxVal
end

local numbers = {1, 2, 3, 4, 5}
print(getMaxOfTable(numbers))      -- 5
```

### See also  

- `math.min()`  
- `math.mininteger`  
- `math.maxinteger`
````

## File: src/app/docs/functions/math/maxinteger/page.mdx
````
export const metadata = {
  title: 'math.maxinteger',
  description: '',
}

The `math.maxinteger` constant represents the maximum value that can be stored in an integer type in lua.

### Syntax  

```lua
math.maxinteger
```

### Return value  

Returns the maximum integer value, typically represented as a constant. This value is implementation-dependent but is guaranteed to be at least 2^53 - 1 for systems that use double-precision floating-point numbers to represent integers.

### Description  

`math.maxinteger` is a predefined constant in lua that signifies the largest integer that can be safely represented without loss of precision. It is particularly useful for performing arithmetic operations that involve large integers to ensure that they do not exceed the representable range.

### Examples  

#### Using `math.maxinteger`

```lua
print(math.maxinteger)                -- Output: 9223372036854775807 (or the equivalent maximum integer value)
```

#### Comparison with other integers

```lua
local bigNumber = math.maxinteger + 1
print(bigNumber)                       -- Output may vary, could result in a number that cannot be represented as an integer
print(bigNumber == math.maxinteger + 1) -- false, as it exceeds maxinteger
```

### See also  

- `math.max`
- `math.mininteger`  
- `math.min`
````

## File: src/app/docs/functions/math/min/page.mdx
````
export const metadata = {
  title: 'math.min()',
  description: '',
}

The `math.min` function returns the argument with the minimum value among the provided numbers.

### Syntax  

```lua
math.min(x, ...)
```

### Parameters  

- **x**: A number.
- **...**: Zero or more numbers. The function will return the smallest value among these parameters.

### Return value  

The smallest of the given numbers. If any parameter is `NaN`, it returns `NaN`. If no parameters are provided, it returns `math.huge`.

### Description  

`math.min` compares all the provided arguments using the lua `<` operator to determine which one has the minimum value. It is important to note that if any of the arguments are `NaN` (not a number), the function will return `NaN`.

### Examples  

#### Using `math.min()`

```lua
print(math.min(10, 20))            -- 10
print(math.min(-10, -20))          -- -20
print(math.min(-10, 20))            -- -10
print(math.min())                   -- Infinity
print(math.min(10, 20, 30, 5))     -- 5
print(math.min(-math.huge, 0))     -- -Infinity
print(math.min(5, math.nan))       -- NaN
```

#### Getting the minimum element of a table  

You can use a loop to find the minimum value in a numeric table:

```lua
function getMinOfTable(numTable)
    local minVal = math.huge
    for _, v in ipairs(numTable) do
        minVal = math.min(minVal, v)
    end
    return minVal
end

local numbers = {1, 2, 3, -4, 5}
print(getMinOfTable(numbers))      -- -4
```

### See also  

- `math.max()`  
- `math.mininteger`  
- `math.maxinteger`
````

## File: src/app/docs/functions/math/mininteger/page.mdx
````
export const metadata = {
  title: 'math.mininteger',
  description: '',
}

The `math.mininteger` constant represents the minimum value that can be stored in an integer type in lua.

### Syntax  

```lua
math.mininteger
```

### Return value  

Returns the minimum integer value, typically represented as a constant. This value is implementation-dependent but is guaranteed to be at least -(2^53 - 1) for systems that use double-precision floating-point numbers to represent integers.

### Description  

`math.mininteger` is a predefined constant in lua that signifies the smallest integer that can be safely represented without loss of precision. It is particularly useful for performing arithmetic operations that involve small integers to ensure that they do not exceed the representable range.

### Examples  

#### Using `math.mininteger`

```lua
print(math.mininteger)                -- Output: -9223372036854775808 (or the equivalent minimum integer value)
```

#### Comparison with other integers

```lua
local smallNumber = math.mininteger - 1
print(smallNumber)                     -- Output may vary, could result in a number that cannot be represented as an integer
print(smallNumber == math.mininteger - 1) -- false, as it exceeds mininteger
```

### See also  

- `math.min()`  
- `math.max()`  
- `math.maxinteger`
````

## File: src/app/docs/functions/math/modf/page.mdx
````
export const metadata = {
  title: 'math.modf',
  description: '',
}

The `math.modf` function splits a number into its integral and fractional parts.

### Syntax  

```lua
math.modf(x)
```

### Parameters  

- **x**  
  A number (float) that you want to split into integral and fractional parts.

### Return value  

Returns two values:
- The integral part of **x** (as a float).
- The fractional part of **x** (as a float).

### Description  

`math.modf` is useful for obtaining both the whole number and decimal parts of a floating-point number. The integral part is the largest integer less than or equal to **x**, while the fractional part is the difference between **x** and its integral part.

### Examples  

#### Using `math.modf`

```lua
local intPart, fracPart = math.modf(3.14)
print(intPart)  -- Output: 3.0
print(fracPart)  -- Output: 0.14
```

#### Handling negative numbers

```lua
local intPart, fracPart = math.modf(-2.5)
print(intPart)  -- Output: -2.0
print(fracPart)  -- Output: -0.5
```

### See also  

- `math.floor`  
- `math.ceil`
````

## File: src/app/docs/functions/math/pi/page.mdx
````
export const metadata = {
  title: 'math.pi',
  description: '',
}

The `math.pi` constant represents the mathematical constant π (pi), which is the ratio of the circumference of a circle to its diameter.

### Value  

```
\[
\text{math.pi} \approx 3.14159
\]
```

### Property Attributes  

- **Writable:** no  
- **Enumerable:** no  
- **Configurable:** no  

### Description  

Since `pi` is a constant in the `math` library, it is accessed as `math.pi`, rather than as a property of an object. It is commonly used in mathematical calculations involving circles, such as finding the circumference or area.

### Examples  

#### Using `math.pi`

The following function calculates the circumference of a circle given its radius:

```lua
function calculateCircumference(radius)
  return math.pi * (radius * 2)
end

print(calculateCircumference(1)) -- Output: 6.283185307179586
```

#### Using `math.pi` to calculate the area of a circle

```lua
function calculateArea(radius)
  return math.pi * radius * radius
end

print(calculateArea(1)) -- Output: 3.141592653589793
```

### See also  

- `math`
````

## File: src/app/docs/functions/math/rad/page.mdx
````
export const metadata = {
  title: 'math.rad()',
  description: '',
}

The `math.rad()` function converts an angle from degrees to radians.

### Syntax  

```lua
math.rad(x)
```

### Parameters  

- **x**: The angle in degrees.

### Return Value  

The function returns the equivalent angle in radians.

### Description  

The `math.rad` function is useful for converting degrees to radians, which is often required in trigonometric functions in lua's `math` library, as these functions expect angles to be in radians.

### Examples  

#### Using `math.rad`

```lua
local degrees = 180
local radians = math.rad(degrees)
print(radians) -- Output: 3.141592653589793
```

#### Converting different angles

```lua
print(math.rad(0))    -- Output: 0
print(math.rad(90))   -- Output: 1.5707963267948966
print(math.rad(360))  -- Output: 6.283185307179586
```

### See also  

- `math.deg`: Converts an angle from radians to degrees.
````

## File: src/app/docs/functions/math/random/page.mdx
````
export const metadata = {
  title: 'math.random()',
  description: '',
}

The `math.random()` function generates pseudo-random numbers. When called without arguments, it returns a pseudo-random float in the range \([0, 1)\). When called with two integers \(m\) and \(n\), it returns a pseudo-random integer in the range \([m, n]\). The call `math.random(n)` for a positive \(n\) is equivalent to `math.random(1, n)`, while `math.random(0)` produces an integer with all bits (pseudo)random.

This function uses the xoshiro256** algorithm to produce pseudo-random 64-bit integers, which serve as the foundation for the other results (ranges and floats) generated by this function.

### Syntax  

```lua
math.random([m [, n]])
```

### Parameters  

- **m** (optional): The lower bound of the random integer range (inclusive).
- **n** (optional): The upper bound of the random integer range (inclusive). If only one argument is provided, it is treated as the upper bound.

### Return Value  

- When called without arguments: a pseudo-random float in the range \([0, 1)\).
- When called with two integers \(m\) and \(n\): a pseudo-random integer in the range \([m, n]\).
- When called with a single argument \(n\): a pseudo-random integer in the range \([1, n]\).
- When called with \(0\): returns an integer with all bits pseudo-random.

### Description  

lua initializes its pseudo-random generator automatically, so each program run will generate different sequences of results unless a specific seed is provided using `math.randomseed`.

### Examples  

#### Generating a random float

```lua
local randomFloat = math.random() -- Random float between 0 and 1
print(randomFloat)
```

#### Generating a random integer between two values

```lua
local randomInt = math.random(1, 10) -- Random integer between 1 and 10
print(randomInt)
```

#### Generating a random integer with one argument

```lua
local randomIntFromOneToN = math.random(5) -- Random integer between 1 and 5
print(randomIntFromOneToN)
```

### Random Seed Initialization  

To initialize the random generator with a specific seed, use `math.randomseed`.

#### Example of using a seed

```lua
math.randomseed(os.time()) -- Initialize the random generator with the current time
local seededRandomInt = math.random(1, 100) -- Random integer between 1 and 100
print(seededRandomInt)
```

### See also  

- `math.randomseed()`
````

## File: src/app/docs/functions/math/randomseeds/page.mdx
````
export const metadata = {
  title: 'math.randomseed()',
  description: '',
}

The `math.randomseed()` function initializes the pseudo-random number generator used by `math.random()`. It allows for reproducibility in random number sequences by providing a specific seed. Equal seeds will produce the same sequence of random numbers, making it useful for testing and debugging.

### Syntax  

```lua
math.randomseed(x [, y])
```

### Parameters  

- **x**: The first integer parameter that will be used to generate the seed. This value is combined with the second parameter to form a 128-bit seed.
- **y** (optional): The second integer parameter that is combined with `x`. If omitted, it defaults to `0`.

### Return Value  

Returns the two seed components that were effectively used to initialize the random generator. This allows for resetting the seed to reproduce the same sequence of random numbers.

### Description  

When called with no arguments, lua generates a seed using a weak attempt at randomness, which may not provide a sufficiently random starting point for all applications. To ensure a required level of randomness or to have a deterministic sequence for debugging purposes, you should call `math.randomseed` with explicit arguments.

### Examples  

#### Setting a seed for random number generation

```lua
math.randomseed(os.time()) -- Initialize the random generator with the current time
```

#### Reproducing a sequence of random numbers

```lua
math.randomseed(12345) -- Set a specific seed

for i = 1, 5 do
    print(math.random(1, 100)) -- Will produce the same sequence each time
end
```

#### Using two arguments for the seed

```lua
math.randomseed(12345, 67890) -- Set a seed using two integers
```

### See also  

- `math.random`: Generates pseudo-random numbers based on the initialized seed.
````

## File: src/app/docs/functions/math/sin/page.mdx
````
export const metadata = {
  title: 'math.sin()',
  description: '',
}

The `math.sin` function returns the sine of a given angle, which is expressed in radians. This function is part of the mathematical library in lua, allowing for trigonometric calculations.

### Syntax  

```lua
math.sin(x)
```

### Parameters  

- **x**: A number representing an angle in radians.

### Return Value  

Returns the sine of `x`, which will be a value between -1 and 1, inclusive. If `x` is `Infinity`, `-Infinity`, or `NaN`, the function will return `NaN`.

### Description  

The `math.sin` function computes the sine of the specified angle in radians. Since `sin` is a static method of the math library, it is always used in the form `math.sin()` and not as a method of a math object.

### Examples  

#### Basic usage of `math.sin()`

```lua
print(math.sin(0))             -- Output: 0
print(math.sin(math.pi / 2))   -- Output: 1
print(math.sin(math.pi))        -- Output: 0
print(math.sin(-math.pi / 2))  -- Output: -1
print(math.sin(-Infinity))      -- Output: NaN
print(math.sin(NaN))            -- Output: NaN
```

### See also  

- `math.cos()`  
- `math.tan()`  
- `math.asin()`  
- `math.acos()`  
- `math.atan()`  
- `math.atan2()`
````

## File: src/app/docs/functions/math/sqrt/page.mdx
````
export const metadata = {
  title: 'math.sqrt()',
  description: '',
}

The `math.sqrt()` function returns the square root of a specified number. You can also use the expression `x^0.5` to compute this value.

### Syntax  

```lua
math.sqrt(x)
```

### Parameters  

- **x**: A number greater than or equal to 0.

### Return Value  

Returns the square root of `x`, which is a nonnegative number. If `x` is less than 0, the function will return `NaN`.

### Description  

The `math.sqrt` function computes the square root of the given number `x`. Since `sqrt` is a static method of the math library, it is always used in the form `math.sqrt()` and not as a method of a math object.

### Examples  

#### Basic usage of `math.sqrt()`

```lua
print(math.sqrt(0))        -- Output: 0
print(math.sqrt(1))        -- Output: 1
print(math.sqrt(2))        -- Output: 1.414213562373095
print(math.sqrt(9))        -- Output: 3
print(math.sqrt(16))       -- Output: 4
print(math.sqrt(-1))       -- Output: NaN
print(math.sqrt(Infinity))  -- Output: Infinity
```

### See also  

- `math.pow()`: Returns `x` raised to the power of `y`.
- `math.cbrt()`: Returns the cube root of `x`.
- `math.exp()`: Returns the value of `e` raised to the power of `x`.
- `math.log()`: Returns the natural logarithm of `x`.
````

## File: src/app/docs/functions/math/tan/page.mdx
````
export const metadata = {
  title: 'math.tan()',
  description: '',
}

The `math.tan()` function returns the tangent of a specified angle, which is assumed to be in radians.

### Syntax  

```lua
math.tan(x)
```

### Parameters  

- **x**: A number representing an angle in radians.

### Return Value  

Returns the tangent of `x`. If `x` is Infinity, -Infinity, or NaN, it returns NaN.

### Description  

The `math.tan` function computes the tangent of the given angle `x` in radians. Since `tan` is a static method of the math library, it is always used in the form `math.tan()` and not as a method of a math object.

### Examples  

#### Basic usage of `math.tan()`

```lua
print(math.tan(0))              -- Output: 0
print(math.tan(math.pi / 4))    -- Output: 0.9999999999999999 (Floating point error)
print(math.tan(math.pi / 2))     -- Output: NaN (Approaches infinity)
print(math.tan(math.pi / 3))     -- Output: 1.7320508075688774
print(math.tan(-math.pi / 2))    -- Output: NaN (Approaches negative infinity)
print(math.tan(math.pi))          -- Output: 0
```

#### Using `math.tan()` with degree values

To work with degree values, you can create a function to convert degrees to radians before calculating the tangent:

```lua
function getTanDeg(deg)
    local rad = (deg * math.pi) / 180
    return math.tan(rad)
end

print(getTanDeg(45))  -- Output: 0.9999999999999999
print(getTanDeg(90))  -- Output: NaN (Approaches infinity)
```

### See also  

- `math.sin()`: Returns the sine of an angle.
- `math.cos()`: Returns the cosine of an angle.
- `math.asin()`: Returns the arcsine of a number.
- `math.acos()`: Returns the arccosine of a number.
- `math.atan()`: Returns the arctangent of a number.
- `math.atan2()`: Returns the arctangent of the quotient of its arguments.
````

## File: src/app/docs/functions/math/tointeger/page.mdx
````
export const metadata = {
  title: 'math.tointeger()',
  description: '',
}

The `math.tointeger()` function attempts to convert a given value to an integer. If the value is convertible to an integer, it returns that integer; otherwise, it returns `nil`.

### Syntax  

```lua
math.tointeger(x)
```

### Parameters  

- **x**: A number or value that you want to convert to an integer.

### Return Value  

- If `x` can be converted to an integer, it returns the integer value.
- If `x` cannot be converted to an integer, it returns `nil`.

### Description  

The `math.tointeger` function checks whether the provided value `x` can be represented as an integer. If it can, the function returns the integer representation; if it cannot (e.g., if `x` is a non-integer number, NaN, or is outside the range of integers), it returns `nil`.

### Examples  

#### Basic usage of `math.tointeger()`

```lua
print(math.tointeger(42))        -- Output: 42
print(math.tointeger(3.14))      -- Output: nil (not an integer)
print(math.tointeger(0))          -- Output: 0
print(math.tointeger(-100))       -- Output: -100
print(math.tointeger(1e6))        -- Output: 1000000
print(math.tointeger(math.huge))  -- Output: nil (not an integer)
print(math.tointeger(5.0))        -- Output: 5 (5.0 is convertible to 5)
print(math.tointeger("42"))       -- Output: nil (string is not convertible)
```

### See also  

- `math.floor()`: Returns the largest integer less than or equal to a number.
- `math.ceil()`: Returns the smallest integer greater than or equal to a number.
- `math.modf()`: Returns the integer part and the fractional part of a number.
````

## File: src/app/docs/functions/math/type/page.mdx
````
export const metadata = {
  title: 'math.type()',
  description: '',
}

The `math.type()` function returns the type of a number. It determines whether a given value is an integer, a float (real number), or not a number at all.

### Syntax  

```lua
math.type(x)
```

### Parameters  

- **x**: A number or value whose type you want to determine.

### Return Value  

- Returns `"integer"` if `x` is an integer.
- Returns `"float"` if `x` is a float (real number).
- Returns `nil` if `x` is not a number (e.g., NaN, nil, or non-numeric values).

### Description  

The `math.type` function checks the provided value `x` and returns a string indicating its type. If `x` is a valid integer, it returns `"integer"`. If `x` is a valid float, it returns `"float"`. If `x` is not a valid number, it returns `nil`.

### Examples  

#### Basic usage of `math.type()`

```lua
print(math.type(42))        -- Output: "integer"
print(math.type(3.14))      -- Output: "float"
print(math.type(-0.5))      -- Output: "float"
print(math.type(0))         -- Output: "integer"
print(math.type(5.0))       -- Output: "float"
print(math.type(math.huge))  -- Output: "float"
print(math.type("42"))      -- Output: nil (string is not a number)
print(math.type(nil))       -- Output: nil
print(math.type(math.nan))  -- Output: nil (NaN is not a valid number)
```

### See also  

- `math.tointeger()`  
- `math.isinteger()`
````

## File: src/app/docs/functions/math/ult/page.mdx
````
export const metadata = {
  title: 'math.ult()',
  description: '',
}

## `math.ult()`

### Baseline  
Available in lua 5.3 and later.

The `math.ult()` function returns a boolean value indicating whether one integer is less than another when treated as unsigned integers.

### Syntax  

```lua
math.ult(m, n)
```

### Parameters  

- **m**: An integer to compare.
- **n**: Another integer to compare against.

### Return Value  

- Returns `true` if `m` is less than `n` when both are treated as unsigned integers.
- Returns `false` otherwise.

### Description  

The `math.ult` function compares two integers, `m` and `n`, by treating them as unsigned values. This is particularly useful for comparing negative integers or large positive integers where overflow might occur if treated as signed integers. 

### Examples  

#### Basic usage of `math.ult()`

```lua
print(math.ult(5, 10))        -- Output: true (5 is less than 10)
print(math.ult(10, 5))        -- Output: false (10 is not less than 5)
print(math.ult(-1, 0))        -- Output: false (unsigned comparison; -1 is treated as a large unsigned number)
print(math.ult(0, 1))         -- Output: true (0 is less than 1)
print(math.ult(255, 256))     -- Output: true (255 is less than 256)
print(math.ult(256, 255))     -- Output: false (256 is not less than 255)
print(math.ult(math.huge, 1)) -- Output: false (infinity is not less than 1)
```

### See also  

- `math.odd()`  
- `math.even()`
````

## File: src/app/docs/functions/math/page.mdx
````
export const metadata = {
  title: 'Math',
  description: '',
}

# Math
````

## File: src/app/docs/functions/os/page.mdx
````
export const metadata = {
  title: 'os',
  description: '',
}

# os
````

## File: src/app/docs/functions/package/page.mdx
````
export const metadata = {
  title: 'Package',
  description: '',
}

# Package
````

## File: src/app/docs/functions/string/byte/page.mdx
````
export const metadata = {
  title: 'string.byte()',
  description: 'The `string.byte()` function retrieves the numeric ASCII (or Unicode) value of characters in a string, enabling flexible character encoding and string manipulation.',
};

# string.byte()

The `string.byte()` function retrieves the numeric ASCII (or Unicode) value of a character or a sequence of characters in a string. It is commonly used for encoding, debugging, and understanding character-level data.

## Syntax

```lua
string.byte(s, start, end_)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string from which the ASCII (or Unicode) values of characters will be extracted.
  </Property>
  <Property name="start" type="number (default: 1)">
    The starting position in the string to begin retrieving character values.
  </Property>
  <Property name="end_" type="number (optional)">
    The ending position in the string up to which character values will be extracted. If omitted, only the value at the `start` position will be returned.
  </Property>
</Properties>

## Return Value
The function returns:
- A single numeric value if only `start` is provided.
- Multiple numeric values if both `start` and `end_` are provided.

## Examples

### Example 1: Retrieve a single ASCII value
The function retrieves the ASCII (or Unicode) value of the first character when no `start` is specified.

<CodeGroup title="Example 1">
```lua
print(string.byte("Lua")) 

-- Output: 76 (ASCII for 'L')
```
</CodeGroup>

### Example 2: Retrieve values for a range of characters
The function retrieves values for all characters between the specified `start` and `end_` positions.

<CodeGroup title="Example 2">
```lua
local result = {string.byte("Hello, Lua!", 1, 5)}

print(table.concat(result, ", "))

-- Output: 72, 101, 108, 108, 111
```
</CodeGroup>

### Example 3: ASCII for special characters
You can extract numeric values for special characters as well.

<CodeGroup title="Example 3">
```lua
print(string.byte("!")) -- Output: 33
print(string.byte("$")) -- Output: 36
print(string.byte("@")) -- Output: 64
```
</CodeGroup>

### Example 4: Extracting the last character's value
By specifying only the `start` parameter, you can extract the ASCII value of the last character in a string.

<CodeGroup title="Example 4">
```lua
local str = "Lua is great!"
print(string.byte(str, #str)) 

-- Output: 33 (ASCII for '!')
```
</CodeGroup>

### Example 5: Decoding a sequence of characters
You can combine `string.byte()` with a loop to decode every character in a string into its ASCII values.

<CodeGroup title="Example 5">
```lua
local str = "Code"
for i = 1, #str do
    print(string.byte(str, i))
end

-- Output:
-- 67 (C)
-- 111 (o)
-- 100 (d)
-- 101 (e)
```
</CodeGroup>

### Example 6: Invalid parameters
When you pass invalid parameters, the function handles them gracefully by returning `nil`.

<CodeGroup title="Example 6">
```lua
print(string.byte("", 1)) -- Output: nil (empty string)
print(string.byte("Hello", 10)) -- Output: nil (out of range)
```
</CodeGroup>

## Use Cases
- Encoding: Convert strings into numeric values for processing or communication.
- Debugging: Analyze strings to understand encoding or detect invalid characters.
- Cryptography: Transform characters into numeric representations for algorithms.

## See also
- **`string.char()`**: Converts numeric ASCII (or Unicode) values back into their corresponding characters. This is essentially the reverse of `string.byte()`.
- **`string.sub()`**: Extracts substrings, which can be combined with `string.byte()` to analyze or process specific sections of a string.
- **`string.unpack()`**: Retrieves structured data from a packed string, which may complement `string.byte()` when dealing with encoded strings.
````

## File: src/app/docs/functions/string/char/page.mdx
````
export const metadata = {
  title: 'string.char()',
  description: 'The `string.char()` function converts numeric ASCII (or Unicode) values into their corresponding characters, allowing for flexible string creation and manipulation.',
};

# string.char()

The `string.char()` function converts numeric ASCII (or Unicode) values into their corresponding characters. It is commonly used to construct strings programmatically, perform encoding tasks, or debug character-level data.

## Syntax

```lua
string.char(value1, value2, ...)
```

## Parameters

<Properties>
  <Property name="value1, value2, ..." type="number">
    A sequence of numeric ASCII (or Unicode) values to be converted into characters. Each value must be a valid code point (e.g., between 0 and 255 for ASCII).
  </Property>
</Properties>

## Return Value
The function returns:
- A string constructed by converting the provided numeric values into their corresponding characters.

## Examples

### Example 1: Convert a single numeric value to a character
The function converts one ASCII value to its corresponding character.

<CodeGroup title="Example 1">
```lua
print(string.char(65)) 

-- Output: A
```
</CodeGroup>

### Example 2: Convert multiple numeric values into a string
The function combines multiple ASCII values into a string.

<CodeGroup title="Example 2">
```lua
print(string.char(72, 101, 108, 108, 111)) 

-- Output: Hello
```
</CodeGroup>

### Example 3: Use Unicode values
You can use numeric Unicode values for non-ASCII characters as long as they are valid code points.

<CodeGroup title="Example 3">
```lua
print(string.char(195, 169)) 

-- Output: é (Unicode for 'é')
```
</CodeGroup>

### Example 4: Combine with `string.byte()`
You can use `string.char()` to reverse the effect of `string.byte()`.

<CodeGroup title="Example 4">
```lua
local byteValues = {string.byte("Lua", 1, 3)}
local reconstructed = string.char(table.unpack(byteValues))

print(reconstructed)

-- Output: Lua
```
</CodeGroup>

### Example 5: Constructing special characters
You can construct strings with special characters using their ASCII values.

<CodeGroup title="Example 5">
```lua
print(string.char(33, 36, 64)) 

-- Output: !$@
```
</CodeGroup>

### Example 6: Handling invalid values
Invalid numeric values result in an error. Ensure the values are within the valid range.

<CodeGroup title="Example 6">
```lua
-- print(string.char(300)) 
-- Error: bad argument #1 to 'char' (value out of range)
```
</CodeGroup>

## Use Cases
- Decoding: Convert numeric representations of characters back into readable strings.
- String Construction: Dynamically build strings programmatically.
- Debugging: Analyze or reconstruct encoded string data.

## See also
- **`string.byte()`**: Converts characters in a string into their numeric ASCII (or Unicode) values. This is essentially the reverse of `string.char()`.
- **`string.format()`**: Useful when combining formatted text with dynamically generated characters.
- **`string.pack()`**: Packs data into a binary string, which may use characters for encoding.
````

## File: src/app/docs/functions/string/dump/page.mdx
````
export const metadata = {
  title: 'string.dump()',
  description: 'The `string.dump()` function returns a binary representation of a Lua function, useful for serialization or debugging.',
};

# string.dump()

The `string.dump()` function generates a binary string representing a precompiled version of a Lua function. This is useful for serializing or transmitting Lua functions, as well as for debugging purposes. 

## Syntax

```lua
string.dump(function, stripDebug)
```

## Parameters

<Properties>
  <Property name="function" type="function">
    The Lua function to be dumped into a binary representation.
  </Property>
  <Property name="stripDebug" type="boolean" optional="true">
    If set to `true`, debug information (like line numbers) will be stripped from the dumped string, resulting in a smaller binary size.
  </Property>
</Properties>

## Return Value
The function returns:
- A binary string containing the precompiled representation of the Lua function.

## Examples

### Example 1: Dump a simple function
The function is dumped into its binary representation.

<CodeGroup title="Example 1">
```lua
local function greet()
  return "Hello, world!"
end

local dumped = string.dump(greet)
print(dumped)

-- Output: A binary string representing the compiled function
```
</CodeGroup>

### Example 2: Serialize and reuse a function
Dump a function, save it to a file, and load it later.

<CodeGroup title="Example 2">
```lua
local function square(x)
  return x * x
end

-- Serialize the function to a file
local dumped = string.dump(square)
local file = io.open("square_function.bin", "wb")
file:write(dumped)
file:close()

-- Later, load the function back
local file = io.open("square_function.bin", "rb")
local binary = file:read("*a")
file:close()

local loadedFunction = load(binary)
print(loadedFunction(5)) -- Output: 25
```
</CodeGroup>

### Example 3: Strip debug information
Use the `stripDebug` parameter to create a more compact binary representation.

<CodeGroup title="Example 3">
```lua
local function sum(a, b)
  return a + b
end

local dumped = string.dump(sum, true) -- Strips debug information
print(dumped)

-- Output: A smaller binary string
```
</CodeGroup>

### Example 4: Error handling
`string.dump()` only works with Lua functions. Attempting to dump a non-function value will raise an error.

<CodeGroup title="Example 4">
```lua
-- print(string.dump("not a function"))
-- Error: bad argument #1 to 'dump' (function expected, got string)
```
</CodeGroup>

## Use Cases
- **Serialization**: Save functions for reuse or transmission.
- **Debugging**: Analyze or compare the internal representation of Lua functions.
- **Optimization**: Strip debug information to reduce binary size for production use.

## See also
- **`load()`**: Reconstructs a function from a binary string generated by `string.dump()`.
- **`loadstring()`**: Similar to `load()`, but used for loading Lua code from strings (deprecated in Lua 5.2+).
- **`io.open()`**: Useful for saving or loading dumped functions from files.
````

## File: src/app/docs/functions/string/find/page.mdx
````
export const metadata = {
  title: 'string.find()',
  description: 'The `string.find()` function searches for a pattern within a string and returns the start and end indices of the match.',
};

# string.find()

The `string.find()` function searches for a pattern within a string and returns the starting and ending indices of the first match. It is commonly used for pattern matching or substring searching.

## Syntax

```lua
string.find(s, pattern, init, plain)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string to search within.
  </Property>
  <Property name="pattern" type="string">
    The pattern to search for. This can be a plain string or a Lua pattern.
  </Property>
  <Property name="init" type="number" optional="true">
    The starting position for the search. Defaults to `1`. Negative values count from the end of the string.
  </Property>
  <Property name="plain" type="boolean" optional="true">
    If `true`, disables pattern matching and treats the `pattern` as a plain string. Defaults to `false`.
  </Property>
</Properties>

## Return Value
- **If a match is found**: Returns the start and end indices of the first occurrence of the pattern, and any captured substrings (if applicable).
- **If no match is found**: Returns `nil`.

## Examples

### Example 1: Basic search
Search for a substring in a string.

<CodeGroup title="Example 1">
```lua
local text = "The quick brown fox"
local startIndex, endIndex = string.find(text, "quick")

print(startIndex, endIndex) 
-- Output: 5 9
```
</CodeGroup>

### Example 2: Using patterns
Search for the first word starting with a vowel.

<CodeGroup title="Example 2">
```lua
local text = "The quick brown fox"
local startIndex, endIndex = string.find(text, "%a*[aeiou]%a*")

print(startIndex, endIndex)
-- Output: 5 9 (matches "quick")
```
</CodeGroup>

### Example 3: Starting position (`init`)
Specify where the search begins.

<CodeGroup title="Example 3">
```lua
local text = "The quick brown fox jumps"
local startIndex, endIndex = string.find(text, "fox", 11)

print(startIndex, endIndex)
-- Output: 17 19
```
</CodeGroup>

### Example 4: Plain search
Disable pattern matching with `plain`.

<CodeGroup title="Example 4">
```lua
local text = "The quick [pattern] fox"
local startIndex, endIndex = string.find(text, "[pattern]", 1, true)

print(startIndex, endIndex)
-- Output: 11 19
```
</CodeGroup>

### Example 5: No match
Handle cases where the pattern is not found.

<CodeGroup title="Example 5">
```lua
local text = "The quick brown fox"
local result = string.find(text, "cat")

print(result)
-- Output: nil
```
</CodeGroup>

## Use Cases
- **Substring Search**: Find specific words or characters in a string.
- **Pattern Matching**: Use Lua patterns to identify substrings that match specific criteria.
- **Custom Search**: Limit the search range with `init` or perform literal matches with `plain`.

## See also
- **`string.match()`**: Extracts the first substring that matches a pattern.
- **`string.gmatch()`**: Iterates over all substrings in a string that match a pattern.
- **`string.gsub()`**: Replaces all occurrences of a pattern in a string with a replacement string.
- **`string.sub()`**: Extracts a substring using start and end indices.
````

## File: src/app/docs/functions/string/format/page.mdx
````
export const metadata = {
  title: 'string.format()',
  description: 'The `string.format()` function returns a formatted string based on a specified format string and arguments.',
};

# string.format()

The `string.format()` function creates a formatted string using a format string and optional arguments. It is useful for formatting numbers, strings, and other values in a structured way.

## Syntax

```lua
string.format(formatString, ...)
```

## Parameters

<Properties>
  <Property name="formatString" type="string">
    A string specifying the desired format. It can include format specifiers for values to insert.
  </Property>
  <Property name="..." type="varargs">
    A variable number of arguments to format and insert into the `formatString`.
  </Property>
</Properties>

## Return Value
Returns the formatted string after applying the format specifiers.

## Common Format Specifiers

| Specifier  | Description                                           |
|------------|-------------------------------------------------------|
| `%d`       | Formats a number as an integer.                      |
| `%f`       | Formats a number as a floating-point value.          |
| `%s`       | Inserts a string.                                    |
| `%x`/`%X`  | Formats a number as a hexadecimal (lower/uppercase). |
| `%e`/`%E`  | Formats a number in scientific notation.             |
| `%%`       | Inserts a literal `%` character.                    |

## Examples

### Example 1: Basic Formatting
Format a string with a number and a word.

<CodeGroup title="Example 1">
```lua
local formatted = string.format("I have %d apples and %s oranges.", 5, "seven")
print(formatted)

-- Output: I have 5 apples and seven oranges.
```
</CodeGroup>

### Example 2: Floating-point Formatting
Control the number of decimal places for a float.

<CodeGroup title="Example 2">
```lua
local pi = math.pi
local formatted = string.format("Value of pi: %.2f", pi)
print(formatted)

-- Output: Value of pi: 3.14
```
</CodeGroup>

### Example 3: Hexadecimal Formatting
Convert numbers to hexadecimal.

<CodeGroup title="Example 3">
```lua
local number = 255
local formatted = string.format("Hexadecimal: %x", number)
print(formatted)

-- Output: Hexadecimal: ff
```
</CodeGroup>

### Example 4: Scientific Notation
Format numbers in scientific notation.

<CodeGroup title="Example 4">
```lua
local number = 123456789
local formatted = string.format("Scientific: %e", number)
print(formatted)

-- Output: Scientific: 1.234568e+08
```
</CodeGroup>

### Example 5: Literal Percent Sign
Include a `%` character in the output.

<CodeGroup title="Example 5">
```lua
local formatted = string.format("Progress: %d%% complete", 75)
print(formatted)

-- Output: Progress: 75% complete
```
</CodeGroup>

## Use Cases
- **Dynamic Strings**: Insert variables into a string in a structured way.
- **Formatting Numbers**: Control how numbers are displayed, including decimals or scientific notation.
- **Hexadecimal Conversion**: Represent numbers in base-16 for specific applications.
- **Data Reports**: Create neatly formatted output for tables or logs.

## See also
- **`string.gsub()`**: Replace substrings in a string, often used in conjunction with `string.format()` for dynamic replacements.
- **`string.rep()`**: Repeat a string multiple times, useful for formatting or padding.
- **`string.sub()`**: Extract substrings, which can be helpful for dynamic formatting.
````

## File: src/app/docs/functions/string/gmatch/page.mdx
````
export const metadata = {
  title: 'string.gmatch()',
  description: 'The `string.gmatch()` function returns an iterator function to traverse substrings in a string that match a specified pattern.',
};

# string.gmatch()

The `string.gmatch()` function provides an iterator to search for substrings in a string that match a given pattern. It is commonly used in loops for pattern-based string processing.

## Syntax

```lua
string.gmatch(s, pattern)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string to search for substrings.
  </Property>
  <Property name="pattern" type="string">
    The Lua pattern to match substrings. Patterns can include literal characters, character classes, and special characters.
  </Property>
</Properties>

## Return Value
Returns an iterator function that, when called repeatedly, produces substrings matching the specified pattern until no more matches are found.

## Examples

### Example 1: Extract Words from a Sentence
Use `string.gmatch()` to iterate through words in a string.

<CodeGroup title="Example 1">
```lua
local text = "Lua is a powerful, fast, and lightweight scripting language."

for word in string.gmatch(text, "%a+") do
  print(word)
end

-- Output:
-- Lua
-- is
-- a
-- powerful
-- fast
-- and
-- lightweight
-- scripting
-- language
```
</CodeGroup>

### Example 2: Extract Numbers from a String
Match numeric values within a string.

<CodeGroup title="Example 2">
```lua
local data = "2023-01-27"

for number in string.gmatch(data, "%d+") do
  print(number)
end

-- Output:
-- 2023
-- 01
-- 27
```
</CodeGroup>

### Example 3: Find Key-Value Pairs
Extract key-value pairs from a formatted string.

<CodeGroup title="Example 3">
```lua
local query = "name=John&age=30&city=London"

for key, value in string.gmatch(query, "(%w+)=(%w+)") do
  print(key, value)
end

-- Output:
-- name John
-- age 30
-- city London
```
</CodeGroup>

### Example 4: Iterate Over Delimited Substrings
Split a string by commas.

<CodeGroup title="Example 4">
```lua
local csv = "apple,banana,cherry,dates"

for item in string.gmatch(csv, "[^,]+") do
  print(item)
end

-- Output:
-- apple
-- banana
-- cherry
-- dates
```
</CodeGroup>

## Use Cases
- **Text Parsing**: Extract words, numbers, or custom patterns from strings.
- **CSV Handling**: Split data by delimiters like commas or semicolons.
- **Key-Value Matching**: Parse query strings or configuration settings.
- **Pattern Matching**: Search and extract substrings based on Lua patterns.

## See also
- **`string.match()`**: Finds the first occurrence of a pattern in a string, useful for single matches instead of iteration.
- **`string.gsub()`**: Replaces occurrences of a pattern, complementary for processing strings after matching.
- **`string.sub()`**: Extracts specific parts of a string, useful when combined with `string.gmatch()` for targeted manipulation.
````

## File: src/app/docs/functions/string/gsub/page.mdx
````
export const metadata = {
  title: 'string.gsub()',
  description: 'The `string.gsub()` function replaces occurrences of a pattern in a string with a specified replacement.',
};

# string.gsub()

The `string.gsub()` function searches for occurrences of a pattern in a string and replaces them with a specified replacement. It is versatile and can perform global replacements or limit them to a specified number.

## Syntax

```lua
string.gsub(s, pattern, replacement [, n])
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The input string where replacements will be performed.
  </Property>
  <Property name="pattern" type="string">
    The Lua pattern to match substrings in the string.
  </Property>
  <Property name="replacement" type="string/function/table">
    The replacement for matched substrings. Can be:
    - A string to substitute for each match.
    - A function that returns the replacement dynamically based on the match.
    - A table where the replacement is determined by the matched substring as the key.
  </Property>
  <Property name="n" type="number (optional)">
    The maximum number of replacements to perform. Defaults to unlimited.
  </Property>
</Properties>

## Return Value
Returns two values:
1. The modified string with replacements applied.
2. The number of replacements made.

## Examples

### Example 1: Basic Replacement
Replace all occurrences of a word in a string.

<CodeGroup title="Example 1">
```lua
local text = "Hello world, welcome to the Lua world."

local result, count = string.gsub(text, "world", "universe")

print(result)  -- Output: Hello universe, welcome to the Lua universe.
print(count)   -- Output: 2
```
</CodeGroup>

### Example 2: Limit the Number of Replacements
Replace only the first occurrence of a pattern.

<CodeGroup title="Example 2">
```lua
local text = "cat, cat, cat"

local result, count = string.gsub(text, "cat", "dog", 1)

print(result)  -- Output: dog, cat, cat
print(count)   -- Output: 1
```
</CodeGroup>

### Example 3: Use a Function for Replacement
Generate replacements dynamically with a function.

<CodeGroup title="Example 3">
```lua
local text = "a1 b2 c3"

local result = string.gsub(text, "%a%d", function(match)
  return "[" .. match .. "]"
end)

print(result)  -- Output: [a1] [b2] [c3]
```
</CodeGroup>

### Example 4: Use a Table for Replacement
Map replacements with a table.

<CodeGroup title="Example 4">
```lua
local text = "red, green, blue"

local colorMap = {
  red = "rosso",
  green = "verde",
  blue = "blu",
}

local result = string.gsub(text, "%w+", colorMap)

print(result)  -- Output: rosso, verde, blu
```
</CodeGroup>

### Example 5: Replace Patterns with Captures
Use captures in the replacement string.

<CodeGroup title="Example 5">
```lua
local text = "apple:10, banana:20, cherry:30"

local result = string.gsub(text, "(%w+):(%d+)", "%1 (%2)")

print(result)  -- Output: apple (10), banana (20), cherry (30)
```
</CodeGroup>

## Use Cases
- **Search and Replace**: Modify strings by replacing specific patterns.
- **Dynamic Replacements**: Perform complex replacements using functions or tables.
- **Formatting**: Adjust string content, such as inserting or modifying data formats.

## See also
- **`string.find()`**: Locates patterns in a string without replacing them.
- **`string.match()`**: Extracts specific substrings matching a pattern.
- **`string.gmatch()`**: Iterates over all occurrences of a pattern in a string, often used before applying `string.gsub()` for more control.
````

## File: src/app/docs/functions/string/len/page.mdx
````
export const metadata = {
  title: 'string.len()',
  description: 'The `string.len()` function returns the length of a given string in Lua.',
};

# string.len()

The `string.len()` function in Lua calculates and returns the number of characters in a given string, including spaces and special characters. It is a simple and efficient way to measure string length.

## Syntax

```lua
string.len(s)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string whose length is to be calculated.
  </Property>
</Properties>

## Return Value
Returns a number representing the length of the string.

## Examples

### Example 1: Basic String Length
Determine the length of a simple string.

<CodeGroup title="Example 1">
```lua
local text = "Hello, Lua!"

local length = string.len(text)

print(length)  -- Output: 11
```
</CodeGroup>

### Example 2: Length of an Empty String
The function returns `0` for an empty string.

<CodeGroup title="Example 2">
```lua
local text = ""

local length = string.len(text)

print(length)  -- Output: 0
```
</CodeGroup>

### Example 3: String with Spaces and Special Characters
Spaces and special characters are included in the length calculation.

<CodeGroup title="Example 3">
```lua
local text = "  Lua is fun!  "

local length = string.len(text)

print(length)  -- Output: 15
```
</CodeGroup>

### Example 4: Comparing Lengths
You can use `string.len()` to compare the lengths of different strings.

<CodeGroup title="Example 4">
```lua
local string1 = "cat"
local string2 = "elephant"

if string.len(string1) < string.len(string2) then
  print(string1 .. " is shorter than " .. string2)
end

-- Output: cat is shorter than elephant
```
</CodeGroup>

## Use Cases
- **Validation**: Ensuring a string meets minimum or maximum length requirements.
- **Trimming Logic**: Checking if a string exceeds a certain length before truncating.
- **Comparison**: Determining which of two strings is longer.

## See also
- **`string.sub()`**: Extracts substrings from a string, often used with `string.len()` to slice strings based on their length.
- **`string.rep()`**: Repeats a string multiple times, where the length of the result is easily calculated with `string.len()`.
````

## File: src/app/docs/functions/string/lower/page.mdx
````
export const metadata = {
  title: 'string.lower()',
  description: 'The `string.lower()` function converts all uppercase characters in a string to their lowercase equivalents.',
};

# string.lower()

The `string.lower()` function in Lua is used to convert all uppercase characters in a given string to lowercase. This function is useful for case-insensitive comparisons and standardizing string formats.

## Syntax

```lua
string.lower(s)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The input string that will be converted to lowercase.
  </Property>
</Properties>

## Return Value
Returns a new string with all uppercase characters converted to lowercase. The original string remains unchanged.

## Examples

### Example 1: Basic Conversion
Convert a string with mixed case to lowercase.

<CodeGroup title="Example 1">
```lua
local text = "Hello, Lua!"

local lowerText = string.lower(text)

print(lowerText)  -- Output: hello, lua!
```
</CodeGroup>

### Example 2: String with All Uppercase Letters
Convert an all-uppercase string to lowercase.

<CodeGroup title="Example 2">
```lua
local text = "THIS IS A TEST."

local lowerText = string.lower(text)

print(lowerText)  -- Output: this is a test.
```
</CodeGroup>

### Example 3: String with Special Characters
Special characters remain unchanged during conversion.

<CodeGroup title="Example 3">
```lua
local text = "Lua is Fun! 123 #$%"

local lowerText = string.lower(text)

print(lowerText)  -- Output: lua is fun! 123 #$%
```
</CodeGroup>

### Example 4: Case-Insensitive Comparison
Use `string.lower()` for case-insensitive string comparison.

<CodeGroup title="Example 4">
```lua
local str1 = "OpenAI"
local str2 = "openai"

if string.lower(str1) == string.lower(str2) then
  print("The strings are equal (case-insensitive).")
else
  print("The strings are not equal.")
end

-- Output: The strings are equal (case-insensitive).
```
</CodeGroup>

## Use Cases
- **Normalization**: Standardize strings before processing or storing them.
- **Search Functionality**: Implement case-insensitive search features.
- **Data Cleaning**: Prepare user input for comparison by converting to a common case.

## See also
- **`string.upper()`**: Converts all lowercase characters in a string to uppercase, often used in conjunction with `string.lower()` for case normalization.
- **`string.gsub()`**: Can be used to replace parts of a string after standardizing its case with `string.lower()`.
````

## File: src/app/docs/functions/string/match/page.mdx
````
export const metadata = {
  title: 'string.match()',
  description: 'The `string.match()` function searches for a pattern in a string and returns the first match found.',
};

# string.match()

The `string.match()` function in Lua searches for a specified pattern in a string and returns the first occurrence of the match. If no match is found, it returns `nil`. This function is particularly useful for extracting substrings or validating input formats.

## Syntax

```lua
string.match(s, pattern, init)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string to be searched for the specified pattern.
  </Property>
  <Property name="pattern" type="string">
    The pattern to search for in the string. Lua's pattern matching syntax is used.
  </Property>
  <Property name="init" type="number" optional="true">
    The starting position in the string from which to begin searching. Defaults to `1` if not provided.
  </Property>
</Properties>

## Return Value
Returns the first match found as a string. If no match is found, it returns `nil`.

## Pattern Table
Here are some commonly used patterns in Lua's pattern matching:

| Pattern              | Description                                                   |
|----------------------|---------------------------------------------------------------|
| `.`                   | Matches any character (except a newline).                    |
| `%a`                 | Matches any letter (alphabetical character).                 |
| `%c`                 | Matches any control character.                                |
| `%d`                 | Matches any digit (0-9).                                     |
| `%l`                 | Matches any lowercase letter (a-z).                           |
| `%u`                 | Matches any uppercase letter (A-Z).                           |
| `%s`                 | Matches any space character (including spaces, tabs, etc.).  |
| `%p`                 | Matches any punctuation character.                            |
| `%w`                 | Matches any alphanumeric character (letters and digits).     |
| `%x`                 | Matches any hexadecimal digit (0-9 and a-f).                 |
| `*`                   | Matches 0 or more occurrences of the preceding element.      |
| `+`                   | Matches 1 or more occurrences of the preceding element.      |
| `-`                   | Matches 0 or more occurrences, but as few as possible (non-greedy). |
| `?`                   | Matches 0 or 1 occurrence of the preceding element.          |
| `^`                   | Matches the start of a string.                               |
| `$`                   | Matches the end of a string.                                 |
| `[...]`              | Matches any single character in the brackets.                |
| `%<` and `%>`        | Matches the `<` and `>` characters.                          |
| `%-`                 | Matches the `-` character.                                   |
| `%%`                 | Matches the `%` character (escape sequence).                 |

## Examples

### Example 1: Basic Pattern Matching
Search for a simple substring within a string.

<CodeGroup title="Example 1">
```lua
local text = "Hello, Lua!"

local match = string.match(text, "Lua")

print(match)  -- Output: Lua
```
</CodeGroup>

### Example 2: Using Patterns
Search for patterns using Lua's pattern syntax.

<CodeGroup title="Example 2">
```lua
local text = "The year is 2025."

local match = string.match(text, "%d%d%d%d")  -- Matches a four-digit number

print(match)  -- Output: 2025
```
</CodeGroup>

### Example 3: Starting from a Specific Position
Start searching from a specific position in the string.

<CodeGroup title="Example 3">
```lua
local text = "Look at the stars, Look how they shine."

local match = string.match(text, "Look", 10)  -- Start searching after the 9th character

print(match)  -- Output: Look
```
</CodeGroup>

### Example 4: No Match Found
Return `nil` if no match is found.

<CodeGroup title="Example 4">
```lua
local text = "Hello, Lua!"

local match = string.match(text, "Python")

print(match)  -- Output: nil
```
</CodeGroup>

## Use Cases
- **Input Validation**: Check if a string meets specific format requirements.
- **Data Extraction**: Extract specific information from strings, such as dates or identifiers.
- **Pattern Recognition**: Identify the presence of specific patterns in user input or text files.

## See also
- **`string.gmatch()`**: Iterates over all occurrences of a pattern in a string, allowing for more comprehensive pattern searches.
- **`string.gsub()`**: Replaces occurrences of a pattern in a string, which can be useful after identifying matches with `string.match()`.
````

## File: src/app/docs/functions/string/pack/page.mdx
````
export const metadata = {
  title: 'string.pack()',
  description: 'The `string.pack()` function converts values into a binary string based on a specified format.',
};

# string.pack()

The `string.pack()` function in Lua is used to convert multiple values into a binary string using a specified format. This is useful for packing data into a format suitable for transmission or storage, such as when working with binary protocols or files.

## Syntax

```lua
string.pack(format, ...)
```

## Parameters

<Properties>
  <Property name="format" type="string">
    A string that specifies the format in which to pack the values. It defines how the subsequent values will be encoded.
  </Property>
  <Property name="..." type="any">
    The values to be packed into a binary string, following the specified format.
  </Property>
</Properties>

## Return Value
Returns the packed binary string.

## Format Specification
The format string can contain various format codes that determine how the values are packed:

| Format Code | Description                                      |
|-------------|--------------------------------------------------|
| `b`         | Signed byte (1 byte).                           |
| `B`         | Unsigned byte (1 byte).                         |
| `h`         | Signed short (2 bytes).                         |
| `H`         | Unsigned short (2 bytes).                       |
| `l`         | Signed long (4 bytes).                          |
| `L`         | Unsigned long (4 bytes).                        |
| `f`         | Float (4 bytes).                                |
| `d`         | Double (8 bytes).                               |
| `s`         | String (length-prefixed).                        |
| `c`         | Character (1 byte).                             |
| `p`         | Pointer (4 bytes).                              |
| `n`         | Number of bytes (to be written as unsigned long). |

## Examples

### Example 1: Packing Basic Types
Pack various data types into a binary string.

<CodeGroup title="Example 1">
```lua
local packedData = string.pack("bhlf", -10, 20, 12345, 3.14)

print(packedData)  -- Output: A binary string representing the packed data
```
</CodeGroup>

### Example 2: Packing Strings
Pack a string along with a number.

<CodeGroup title="Example 2">
```lua
local name = "Lua"
local age = 5
local packedData = string.pack("s2l", name, age)  -- 's2' indicates the string length is 2

print(packedData)  -- Output: A binary string representing the packed data
```
</CodeGroup>

### Example 3: Unpacking the Data
To retrieve the values packed in a binary string, use `string.unpack()`.

<CodeGroup title="Example 3">
```lua
local packedData = string.pack("bhlf", -10, 20, 12345, 3.14)
local unpackedValues = {string.unpack("bhlf", packedData)}

print(unpackedValues[1], unpackedValues[2], unpackedValues[3], unpackedValues[4])
-- Output: -10  20  12345  3.14
```
</CodeGroup>

## Use Cases
- **Network Communication**: Packing data for transmission over a network.
- **File Storage**: Storing structured data in a compact binary format.
- **Interfacing with C Libraries**: Packing data to send to C functions that expect binary data.

## See also
- **`string.unpack()`**: Unpacks binary strings back into individual values based on a specified format.
````

## File: src/app/docs/functions/string/packsize/page.mdx
````
export const metadata = {
  title: 'string.packsize()',
  description: 'The `string.packsize()` function returns the size in bytes needed to pack a given format string.',
};

# string.packsize()

The `string.packsize()` function in Lua is used to determine the number of bytes that will be needed to pack values based on a specified format string. This is useful for understanding memory requirements when packing data.

## Syntax

```lua
string.packsize(format)
```

## Parameters

<Properties>
  <Property name="format" type="string">
    A string that specifies the format for which to calculate the size. It should follow the same format codes as used in `string.pack()`.
  </Property>
</Properties>

## Return Value
Returns the size in bytes required to pack the given format.

## Format Specification
The format string can include various format codes, similar to those used in `string.pack()`, which determine how values will be packed:

| Format Code | Description                                      |
|-------------|--------------------------------------------------|
| `b`         | Signed byte (1 byte).                           |
| `B`         | Unsigned byte (1 byte).                         |
| `h`         | Signed short (2 bytes).                         |
| `H`         | Unsigned short (2 bytes).                       |
| `l`         | Signed long (4 bytes).                          |
| `L`         | Unsigned long (4 bytes).                        |
| `f`         | Float (4 bytes).                                |
| `d`         | Double (8 bytes).                               |
| `s`         | String (length-prefixed, plus 1 byte for the length). |
| `c`         | Character (1 byte).                             |
| `p`         | Pointer (4 bytes).                              |
| `n`         | Number of bytes (to be written as unsigned long). |

## Examples

### Example 1: Size of Basic Types
Calculate the size needed to pack different types.

<CodeGroup title="Example 1">
```lua
local size1 = string.packsize("bhlf")  -- For a signed byte, signed short, signed long, and float
print(size1)  -- Output: 10 (1 + 2 + 4 + 4 = 11 bytes)
```
</CodeGroup>

### Example 2: Size of a String
Calculate the size needed to pack a string with a specific format.

<CodeGroup title="Example 2">
```lua
local size2 = string.packsize("s2")  -- For a string of length 2
print(size2)  -- Output: 3 (2 bytes for the string + 1 byte for the length)
```
</CodeGroup>

### Example 3: Using Multiple Format Codes
Calculate the size for a combination of format codes.

<CodeGroup title="Example 3">
```lua
local size3 = string.packsize("bHf")  -- For a signed byte, unsigned short, and float
print(size3)  -- Output: 7 (1 + 2 + 4 = 7 bytes)
```
</CodeGroup>

## Use Cases
- **Memory Management**: Understanding how much memory is required before packing data.
- **Data Structure Definition**: Planning data structure layouts when interfacing with binary formats.

## See also
- **`string.pack()`**: Packs values into a binary string based on a specified format.
````

## File: src/app/docs/functions/string/rep/page.mdx
````
export const metadata = {
  title: 'string.rep()',
  description: 'The `string.rep()` function creates a new string by repeating a specified string a given number of times.',
};

# string.rep()

The `string.rep()` function in Lua is used to generate a new string by repeating an existing string a specified number of times. This is useful for creating strings with repeated patterns or for formatting output.

## Syntax

```lua
string.rep(string, times)
```

## Parameters

<Properties>
  <Property name="string" type="string">
    The string that will be repeated.
  </Property>
  <Property name="times" type="number">
    The number of times to repeat the string. It must be a positive integer.
  </Property>
</Properties>

## Return Value
Returns a new string that is the result of repeating the input string the specified number of times. If `times` is less than or equal to zero, an empty string is returned.

## Examples

### Example 1: Basic String Repetition
Repeat a simple string multiple times.

<CodeGroup title="Example 1">
```lua
local repeated = string.rep("Lua ", 3)
print(repeated)  -- Output: Lua Lua Lua 
```
</CodeGroup>

### Example 2: Repeating with Different Values
Repeat a string with different numbers.

<CodeGroup title="Example 2">
```lua
local repeated = string.rep("A", 5)
print(repeated)  -- Output: AAAAA
```
</CodeGroup>

### Example 3: Handling Zero and Negative Values
Demonstrate behavior when `times` is zero or negative.

<CodeGroup title="Example 3">
```lua
local empty = string.rep("Hello", 0)
print(empty)  -- Output: (empty string)

local negative = string.rep("Hello", -1)
print(negative)  -- Output: (empty string)
```
</CodeGroup>

### Example 4: Creating Patterns
Use `string.rep()` to create a string pattern.

<CodeGroup title="Example 4">
```lua
local pattern = string.rep("-", 10)
print(pattern)  -- Output: ----------
```
</CodeGroup>

## Use Cases
- **Output Formatting**: Creating formatted output for console display or logs.
- **String Manipulation**: Building strings with repeated elements for various applications.

## See also
- **`string.len()`**: Returns the length of a string, useful in conjunction with `string.rep()` for formatting.
````

## File: src/app/docs/functions/string/reverse/page.mdx
````
export const metadata = {
  title: 'string.reverse()',
  description: 'The `string.reverse()` function returns a new string that is the reverse of the input string.',
};

# string.reverse()

The `string.reverse()` function in Lua takes a string as input and returns a new string that contains the characters of the original string in reverse order. This can be useful for various applications, including text manipulation and encoding.

## Syntax

```lua
string.reverse(s)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string that will be reversed.
  </Property>
</Properties>

## Return Value
Returns a new string that is the reverse of the input string. If the input string is empty, an empty string is returned.

## Examples

### Example 1: Basic String Reversal
Reverse a simple string.

<CodeGroup title="Example 1">
```lua
local reversed = string.reverse("Hello")
print(reversed)  -- Output: olleH
```
</CodeGroup>

### Example 2: Reversing a Longer String
Reverse a longer string with spaces.

<CodeGroup title="Example 2">
```lua
local reversed = string.reverse("Lua Programming")
print(reversed)  -- Output: gnimmargorP auL
```
</CodeGroup>

### Example 3: Empty String
Demonstrate behavior when the input string is empty.

<CodeGroup title="Example 3">
```lua
local reversed = string.reverse("")
print(reversed)  -- Output: (empty string)
```
</CodeGroup>

### Example 4: Special Characters
Reverse a string containing special characters.

<CodeGroup title="Example 4">
```lua
local reversed = string.reverse("!@#")
print(reversed)  -- Output: #@!
```
</CodeGroup>

## Use Cases
- **Text Manipulation**: Reversing strings for encoding or decoding data.
- **Data Processing**: Useful in algorithms that require string reversal, such as palindromic checks.

## See also
- **`string.len()`**: Returns the length of a string, which can be helpful in combination with `string.reverse()` for processing.
````

## File: src/app/docs/functions/string/sub/page.mdx
````
export const metadata = {
  title: 'string.sub()',
  description: 'The `string.sub()` function returns a substring from a given string based on specified start and end positions.',
};

# string.sub()

The `string.sub()` function in Lua extracts a substring from a given string. It allows you to specify the starting and optionally the ending positions for the substring. This function is useful for string manipulation and text processing.

## Syntax

```lua
string.sub(s, start, end_)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string from which to extract the substring.
  </Property>
  <Property name="start" type="number">
    The starting position of the substring (1-based index).
  </Property>
  <Property name="end_" type="number" optional>
    The ending position of the substring (1-based index). If omitted, the substring will extend to the end of the string.
  </Property>
</Properties>

## Return Value
Returns the extracted substring. If the starting position is greater than the length of the string, an empty string is returned. If the ending position is less than the starting position, it also returns an empty string.

## Examples

### Example 1: Extracting a Substring
Extract a simple substring from a string.

<CodeGroup title="Example 1">
```lua
local substring = string.sub("Hello, World!", 1, 5)
print(substring)  -- Output: Hello
```
</CodeGroup>

### Example 2: Omitting the Ending Position
Extract a substring from the starting position to the end of the string.

<CodeGroup title="Example 2">
```lua
local substring = string.sub("Lua Programming", 5)
print(substring)  -- Output: Programming
```
</CodeGroup>

### Example 3: Negative Indexing
Using negative indices to count from the end of the string.

<CodeGroup title="Example 3">
```lua
local substring = string.sub("Hello, World!", -6, -1)
print(substring)  -- Output: World!
```
</CodeGroup>

### Example 4: Invalid Indices
Demonstrate behavior with invalid indices.

<CodeGroup title="Example 4">
```lua
local invalid = string.sub("Hello", 10)
print(invalid)  -- Output: (empty string)

local empty = string.sub("Hello", 3, 2)
print(empty)  -- Output: (empty string)
```
</CodeGroup>

## Use Cases
- **String Manipulation**: Extracting specific parts of strings for analysis or display.
- **Data Processing**: Useful in scenarios where only certain portions of a string are needed, such as parsing or formatting.

## See also
- **`string.len()`**: Returns the length of a string, which can be helpful when determining valid indices for `string.sub()`.
- **`string.find()`**: Can be used to locate substrings, which can then be extracted using `string.sub()`.
````

## File: src/app/docs/functions/string/unpack/page.mdx
````
export const metadata = {
  title: 'string.unpack()',
  description: 'The `string.unpack()` function extracts values from a binary string according to a specified format.',
};

# string.unpack()

The `string.unpack()` function in Lua is used to extract values from a binary string based on a specified format. This function is particularly useful for decoding data that has been packed using the `string.pack()` function, allowing you to retrieve the original values in their respective types.

## Syntax

```lua
string.unpack(fmt, s, pos)
```

## Parameters

<Properties>
  <Property name="fmt" type="string">
    The format string that specifies how to interpret the binary data in the input string.
  </Property>
  <Property name="s" type="string">
    The binary string from which values will be extracted.
  </Property>
  <Property name="pos" type="number" optional>
    The starting position in the string to begin unpacking values. Defaults to 1.
  </Property>
</Properties>

## Return Value
Returns the unpacked values from the binary string according to the specified format. If the format string is invalid or does not match the data, the return values may be undefined.

## Examples

### Example 1: Basic Unpacking
Unpacking a single integer from a binary string.

<CodeGroup title="Example 1">
```lua
local packedData = string.pack("i", 42)
local value = string.unpack("i", packedData)
print(value)  -- Output: 42
```
</CodeGroup>

### Example 2: Unpacking Multiple Values
Unpacking multiple values from a binary string.

<CodeGroup title="Example 2">
```lua
local packedData = string.pack("i4s", 12345, "Lua")
local num, str = string.unpack("i4s", packedData)
print(num)  -- Output: 12345
print(str)  -- Output: Lua
```
</CodeGroup>

### Example 3: Specifying a Position
Unpacking from a specific position in the binary string.

<CodeGroup title="Example 3">
```lua
local packedData = string.pack("i2s", 100, "Code")
local num, str = string.unpack("i2s", packedData, 1)
print(num)  -- Output: 100
print(str)  -- Output: Code
```
</CodeGroup>

### Example 4: Handling Invalid Format
Demonstrate behavior when using an invalid format.

<CodeGroup title="Example 4">
```lua
local packedData = string.pack("i", 100)
local success, value = pcall(string.unpack, "z", packedData)
print(success)  -- Output: false
print(value)    -- Output: (error message)
```
</CodeGroup>

## Use Cases
- **Data Decoding**: Retrieving values from packed binary data for further processing.
- **Network Communication**: Unpacking data received over a network that has been formatted for transmission.

## See also
- **`string.pack()`**: The function used to create packed binary data that can be unpacked using `string.unpack()`.
````

## File: src/app/docs/functions/string/upper/page.mdx
````
export const metadata = {
  title: 'string.upper()',
  description: 'The `string.upper()` function converts all lowercase letters in a string to uppercase letters.',
};

# string.upper()

The `string.upper()` function in Lua is used to convert all lowercase letters in a string to their uppercase counterparts. This function is useful for text formatting, normalization, or comparison purposes where case sensitivity may be an issue.

## Syntax

```lua
string.upper(s)
```

## Parameters

<Properties>
  <Property name="s" type="string">
    The string to be converted to uppercase.
  </Property>
</Properties>

## Return Value
Returns a new string with all lowercase letters converted to uppercase. Non-letter characters remain unchanged.

## Examples

### Example 1: Basic Uppercase Conversion
Converting a simple string to uppercase.

<CodeGroup title="Example 1">
```lua
local result = string.upper("hello world")
print(result)  -- Output: HELLO WORLD
```
</CodeGroup>

### Example 2: String with Mixed Case
Handling a string with mixed case letters.

<CodeGroup title="Example 2">
```lua
local result = string.upper("Lua Programming")
print(result)  -- Output: LUA PROGRAMMING
```
</CodeGroup>

### Example 3: Non-Letter Characters
Demonstrating that non-letter characters are unchanged.

<CodeGroup title="Example 3">
```lua
local result = string.upper("hello, world! 123")
print(result)  -- Output: HELLO, WORLD! 123
```
</CodeGroup>

### Example 4: Empty String
Behavior when passing an empty string.

<CodeGroup title="Example 4">
```lua
local result = string.upper("")
print(result)  -- Output: (empty string)
```
</CodeGroup>

## Use Cases
- **Text Normalization**: Ensuring uniformity in string comparisons.
- **Formatting**: Preparing strings for display by converting them to uppercase.

## See also
- **`string.lower()`**: Converts all uppercase letters in a string to lowercase, useful for case-insensitive comparisons.
````

## File: src/app/docs/functions/string/page.mdx
````
export const metadata = {
  title: 'Lua Strings',
  description: 'An overview of strings in Lua and their associated methods for manipulating string data.',
};

# Lua Strings

In Lua, strings are sequences of characters used to represent text data. They are fundamental data types that can include letters, numbers, symbols, and whitespace. Strings in Lua are immutable, meaning that once a string is created, it cannot be changed. Instead, any operation that modifies a string will result in a new string being created.

### Characteristics of Lua Strings
- **Immutable**: Strings cannot be modified in place. Any transformation results in a new string.
- **UTF-8 Support**: Lua strings support UTF-8 encoding, allowing the representation of a wide range of characters from different languages.
- **Versatile**: Strings can be utilized for a variety of purposes, including text manipulation, data formatting, and string searching.

### String Methods
- `string.byte()`
- `string.char()`
- `string.dump()`
- `string.find()`
- `string.format()`
- `string.gmatch()`
- `string.gsub()`
- `string.len()`
- `string.lower()`
- `string.match()`
- `string.pack()`
- `string.packsize()`
- `string.rep()`
- `string.reverse()`
- `string.sub()`
- `string.unpack()`
- `string.upper()`
````

## File: src/app/docs/functions/table/(methods)/concat/page.mdx
````
export const metadata = {
  title: 'table.concat()',
  description: 'Concatenates the values of a table into a single string with an optional separator.',
};

# table.concat()

The `table.concat()` function combines the values of a table into a single string, optionally using a specified separator between each value.

## Syntax

```lua
table.concat(tableData, separator, start, end)
```

## Parameters

<Properties>
  <Property name="tableData" type="table">
    The table whose values will be concatenated into a string.
  </Property>
  <Property name="separator" type="string|nil">
    Optional. A string used as a separator between the values. Defaults to an empty string if not provided.
  </Property>
  <Property name="start" type="number|nil">
    Optional. The starting index for concatenation. Defaults to `1`.
  </Property>
  <Property name="end" type="number|nil">
    Optional. The ending index for concatenation. Defaults to the length of the table.
  </Property>
</Properties>

## Return

Returns a string that consists of the concatenated values of the specified table.

## Description

The `table.concat()` function is useful for creating a single string from multiple values stored in a table. If the `separator` parameter is provided, it will be inserted between each value. The `start` and `end` parameters allow for specifying a subrange of the table to concatenate.

## Examples

### Concatenating without a separator
```lua
local fruits = {"Apple", "Banana", "Cherry"}
print(table.concat(fruits))  
-- Output: AppleBananaCherry
```

### Concatenating with a separator
```lua
local fruits = {"Apple", "Banana", "Cherry"}
print(table.concat(fruits, ", "))  
-- Output: Apple, Banana, Cherry
```

### Specifying a range
```lua
local numbers = {10, 20, 30, 40, 50}
print(table.concat(numbers, "-", 2, 4))  
-- Output: 20-30-40
```

### Concatenating with default parameters
```lua
local words = {"Hello", "World"}
print(table.concat(words, " "))  
-- Output: Hello World
```

## See also
- `table.insert()`: Inserts a value into a table at a specified position.
- `table.remove()`: Removes a value from a table at a specified position.
````

## File: src/app/docs/functions/table/(methods)/insert/page.mdx
````
export const metadata = {
  title: 'table.insert()',
  description: 'Inserts a value into a table at a specified position.',
};

# table.insert()

The `table.insert()` function adds a new value to a table at a specified index. If the index is not specified, the value will be added to the end of the table.

## Syntax

```lua
table.insert(tableData, value, position)
```

## Parameters

<Properties>
  <Property name="tableData" type="table">
    The table where the value will be inserted.
  </Property>
  <Property name="value" type="any">
    The value to be inserted into the table.
  </Property>
  <Property name="position" type="number|nil">
    Optional. The position in the table where the value should be inserted. If omitted, the value is appended to the end of the table.
  </Property>
</Properties>

## Return

The function returns `nil`.

## Description

The `table.insert()` function allows you to add values to a table, either at a specific position or at the end. If you specify an index, the function shifts the current elements to the right to accommodate the new value. This is useful for maintaining order in lists or queues.

## Examples

### Inserting a value at a specific position
```lua
local fruits = {"Apple", "Banana", "Cherry"}
table.insert(fruits, 2, "Orange")  -- Inserts "Orange" at index 2
print(table.concat(fruits, ", "))  
-- Output: Apple, Orange, Banana, Cherry
```

### Appending a value to the end
```lua
local numbers = {1, 2, 3}
table.insert(numbers, 4)  -- Appends 4 to the end of the table
print(table.concat(numbers, ", "))  
-- Output: 1, 2, 3, 4
```

### Inserting at the beginning of a table
```lua
local colors = {"Blue", "Green", "Red"}
table.insert(colors, 1, "Yellow")  -- Inserts "Yellow" at the beginning
print(table.concat(colors, ", "))  
-- Output: Yellow, Blue, Green, Red
```

### Inserting in an empty table
```lua
local emptyTable = {}
table.insert(emptyTable, "First")
print(table.concat(emptyTable, ", "))  
-- Output: First
```

## See also
- `table.remove()`: Removes a value from a table at a specified position.
- `table.concat()`: Concatenates the values of a table into a single string.
````

## File: src/app/docs/functions/table/(methods)/move/page.mdx
````
export const metadata = {
  title: 'table.move()',
  description: 'Moves a range of elements from one table to another, with the ability to specify the new position.',
};

# table.move()

The `table.move()` function moves a specified range of elements from one table to another, allowing you to reposition elements within the same table or transfer them to a different table.

## Syntax

```lua
table.move(source, sourcePos, targetPos, targetEnd, target)
```

## Parameters

<Properties>
  <Property name="source" type="table">
    The table from which elements will be moved.
  </Property>
  <Property name="sourcePos" type="number">
    The starting position in the source table from which to move elements.
  </Property>
  <Property name="targetPos" type="number">
    The position in the target table where the elements will be moved to.
  </Property>
  <Property name="targetEnd" type="number">
    The ending position in the source table. This indicates how many elements to move.
  </Property>
  <Property name="target" type="table|nil">
    Optional. The target table to which elements will be moved. If omitted, the source table will be used.
  </Property>
</Properties>

## Return

The function returns the target table containing the moved elements.

## Description

The `table.move()` function is useful for rearranging elements within a table or transferring elements to a different table. It allows for specified ranges and can be used to efficiently manipulate tables.

## Examples

### Moving elements within the same table
```lua
local numbers = {1, 2, 3, 4, 5}
table.move(numbers, 2, 4, 1, numbers)  -- Moves elements from index 2 to 4 to the start
print(table.concat(numbers, ", "))  
-- Output: 2, 3, 4, 1, 5
```

### Moving elements to a different table
```lua
local source = {1, 2, 3, 4, 5}
local target = {}
table.move(source, 2, 4, 1, target)  -- Moves elements from index 2 to 4 of source to target
print(table.concat(target, ", "))  
-- Output: 2, 3, 4
```

### Overlapping move within the same table
```lua
local letters = {"A", "B", "C", "D", "E"}
table.move(letters, 2, 4, 3, letters)  -- Moves B, C, D to positions 3, 4, 5
print(table.concat(letters, ", "))  
-- Output: A, B, B, C, D
```

## See also
- `table.insert()`: Inserts a value into a table at a specified position.
- `table.remove()`: Removes a value from a table at a specified position.
````

## File: src/app/docs/functions/table/(methods)/pack/page.mdx
````
export const metadata = {
  title: 'table.pack()',
  description: 'Packages a variable number of arguments into a table, including a count of the arguments.',
};

# table.pack()

The `table.pack()` function packages a variable number of arguments into a table. It also includes a field called `n` that indicates the number of arguments passed.

## Syntax

```lua
table.pack(...)
```

## Parameters

<Properties>
  <Property name="..." type="any">
    A variable number of arguments to be packed into a table.
  </Property>
</Properties>

## Return

The function returns a table containing the provided arguments. The table has an additional field `n` that holds the count of the arguments.

## Description

The `table.pack()` function is useful for collecting multiple values into a single table. This is particularly helpful when dealing with functions that accept a variable number of arguments, allowing you to handle them as a single collection.

## Examples

### Packing multiple values into a table
```lua
local packedTable = table.pack(1, "Hello", true, {1, 2, 3})
print(packedTable.n)  -- Output: 4
print(packedTable[1])  -- Output: 1
print(packedTable[2])  -- Output: Hello
```

### Handling nil values
```lua
local packedWithNil = table.pack(1, nil, 3)
print(packedWithNil.n)  -- Output: 3
print(packedWithNil[2])  -- Output: nil
```

### Using with a variable number of arguments
```lua
local function showArgs(...)
    local args = table.pack(...)
    print("Number of arguments:", args.n)
    for i = 1, args.n do
        print("Argument " .. i .. ":", args[i])
    end
end

showArgs("A", "B", "C")  
-- Output:
-- Number of arguments: 3
-- Argument 1: A
-- Argument 2: B
-- Argument 3: C
```

## See also
- `table.unpack()`: Unpacks the values from a table back into individual arguments.
````

## File: src/app/docs/functions/table/(methods)/remove/page.mdx
````
export const metadata = {
  title: 'table.remove()',
  description: 'Removes an element from a table at a specified position and returns the removed element.',
};

# table.remove()

The `table.remove()` function removes an element from a table at a specified position and shifts the subsequent elements down to fill the gap.

## Syntax

```lua
table.remove(tableData, position)
```

## Parameters

<Properties>
  <Property name="tableData" type="table">
    The table from which an element will be removed.
  </Property>
  <Property name="position" type="number">
    The position in the table of the element to remove. If omitted, the last element will be removed.
  </Property>
</Properties>

## Return

The function returns the value of the removed element. If the table is empty or the specified position is out of range, it returns `nil`.

## Description

The `table.remove()` function is useful for deleting elements from a table and automatically reindexing the remaining elements. This function modifies the original table.

## Examples

### Removing an element from a specific position
```lua
local fruits = {"Apple", "Banana", "Cherry"}
local removedFruit = table.remove(fruits, 2)
print(removedFruit)  -- Output: Banana
print(table.concat(fruits, ", "))  -- Output: Apple, Cherry
```

### Removing the last element
```lua
local numbers = {1, 2, 3, 4, 5}
local lastNumber = table.remove(numbers)
print(lastNumber)  -- Output: 5
print(table.concat(numbers, ", "))  -- Output: 1, 2, 3, 4
```

### Handling out-of-range positions
```lua
local emptyTable = {}
local removedElement = table.remove(emptyTable, 1)
print(removedElement)  -- Output: nil
```

## See also
- `table.insert()`: Inserts a value into a table at a specified position.
- `table.move()`: Moves elements within a table, potentially useful for rearranging after removals.
````

## File: src/app/docs/functions/table/(methods)/sort/page.mdx
````
export const metadata = {
  title: 'table.sort()',
  description: 'Sorts the elements of a table in place, using an optional comparison function.',
};

# table.sort()

The `table.sort()` function sorts the elements of a table in place. It can take an optional comparison function to customize the sorting behavior.

## Syntax

```lua
table.sort(tableData, comparator)
```

## Parameters

<Properties>
  <Property name="tableData" type="table">
    The table containing the elements to be sorted.
  </Property>
  <Property name="comparator" type="function" optional>
    A function that defines the sort order. It should take two arguments and return `true` if the first argument should come before the second.
  </Property>
</Properties>

## Return

The function returns the sorted table (the same table passed as `tableData`).

## Description

The `table.sort()` function sorts the elements of a table in ascending order by default. If a comparator function is provided, it will be used to determine the order of the elements. This function modifies the original table.

## Examples

### Sorting a table in ascending order
```lua
local numbers = {5, 3, 8, 1, 4}
table.sort(numbers)
print(table.concat(numbers, ", "))  -- Output: 1, 3, 4, 5, 8
```

### Sorting a table in descending order using a comparator
```lua
local function compareDescending(a, b)
    return a > b
end

local values = {5, 3, 8, 1, 4}
table.sort(values, compareDescending)
print(table.concat(values, ", "))  -- Output: 8, 5, 4, 3, 1
```

### Sorting a table of strings
```lua
local fruits = {"Banana", "Apple", "Cherry"}
table.sort(fruits)
print(table.concat(fruits, ", "))  -- Output: Apple, Banana, Cherry
```

### Sorting a table of tables based on a specific key
```lua
local people = {
    {name = "Alice", age = 30},
    {name = "Bob", age = 25},
    {name = "Charlie", age = 35}
}

table.sort(people, function(a, b)
    return a.age < b.age
end)

for _, person in ipairs(people) do
    print(person.name .. ": " .. person.age)
end
-- Output:
-- Bob: 25
-- Alice: 30
-- Charlie: 35
```

## See also
- `table.insert()`: Inserts elements into a table, which may be useful after sorting.
- `table.remove()`: Removes elements from a table, which may be necessary when managing sorted data.
````

## File: src/app/docs/functions/table/(methods)/unpack/page.mdx
````
export const metadata = {
  title: 'table.unpack()',
  description: 'Returns the elements of a table as separate values.',
};

# table.unpack()

The `table.unpack()` function returns the elements of a table as separate values, allowing you to easily use them in a function call or assign them to multiple variables.

## Syntax

```lua
table.unpack(tableData, start, end)
```

## Parameters

<Properties>
  <Property name="tableData" type="table">
    The table containing the elements to be unpacked.
  </Property>
  <Property name="start" type="number" optional>
    The index of the first element to unpack. Defaults to 1.
  </Property>
  <Property name="end" type="number" optional>
    The index of the last element to unpack. If omitted, unpacks all elements from `start` to the end of the table.
  </Property>
</Properties>

## Return

The function returns the elements of the table as separate values. If the specified indices are out of range, it returns `nil`.

## Description

The `table.unpack()` function is particularly useful for passing table elements as arguments to functions that expect multiple parameters. It allows you to work with table data in a more flexible way.

## Examples

### Unpacking all elements from a table
```lua
local fruits = {"Apple", "Banana", "Cherry"}
local a, b, c = table.unpack(fruits)
print(a, b, c)  -- Output: Apple Banana Cherry
```

### Unpacking with a specified starting index
```lua
local numbers = {10, 20, 30, 40, 50}
local second, third = table.unpack(numbers, 2)
print(second, third)  -- Output: 20 30
```

### Unpacking a subset of elements
```lua
local colors = {"Red", "Green", "Blue", "Yellow"}
local green, blue = table.unpack(colors, 2, 3)
print(green, blue)  -- Output: Green Blue
```

### Using unpacked values in a function call
```lua
local function sum(a, b, c)
    return a + b + c
end

local values = {5, 10, 15}
local result = sum(table.unpack(values))
print(result)  -- Output: 30
```

## See also
- `table.pack()`: Packs values into a table, which can be unpacked later.
- `table.insert()`: Inserts values into a table, which can then be unpacked.
````

## File: src/app/docs/functions/table/(utilities)/getmetatable/page.mdx
````
export const metadata = {
  title: 'getmetatable()',
  description: 'Retrieves the metatable associated with a table or userdata.',
};

# getmetatable()

The `getmetatable()` function retrieves the metatable associated with a given table or userdata. Metatables allow you to change the behavior of tables by defining operations like addition, indexing, and method invocation.

## Syntax

```lua
getmetatable(table)
```

## Parameters

<Properties>
  <Property name="table" type="table|userdata">
    The table or userdata for which you want to retrieve the metatable.
  </Property>
</Properties>

## Return

Returns the metatable associated with the specified table or userdata. If the table does not have a metatable, it returns `nil`.

## Description

In Lua, a metatable is a special table that defines how operations on another table behave. The `getmetatable()` function allows you to access the metatable of a table, which can be useful for debugging or for checking the behavior of tables.

To set a metatable, you can use the `setmetatable()` function.

## Examples

### Retrieving a metatable
```lua
local myTable = {}
local meta = {
  __index = function(t, k) return "Key not found" end
}

setmetatable(myTable, meta)

local retrievedMeta = getmetatable(myTable)

print(retrievedMeta)  -- Output: table: 0x...
```

### Checking if a table has a metatable
```lua
local anotherTable = {}

print(getmetatable(anotherTable))  -- Output: nil (no metatable)

setmetatable(anotherTable, {})

print(getmetatable(anotherTable))  -- Output: table: 0x...
```

## See also
- `setmetatable()`: Sets the metatable for a table or userdata.
- `rawget()`: Accesses the value of a key in a table without invoking the metatable.
````

## File: src/app/docs/functions/table/(utilities)/next/page.mdx
````
export const metadata = {
  title: 'next()',
  description: 'Retrieves the next key-value pair in a table iterator.',
};

# next()

The `next()` function is used to retrieve the next key-value pair in a table iterator. It can be used to iterate through a table without relying on the `pairs()` or `ipairs()` functions directly. This function is particularly useful for custom iteration scenarios.

## Syntax

```lua
next(table, key)
```

## Parameters

<Properties>
  <Property name="table" type="table">
    The table from which to retrieve the next key-value pair.
  </Property>
  <Property name="key" type="string|number|nil">
    The current key from which to find the next key-value pair. If this is `nil`, the function returns the first key-value pair in the table.
  </Property>
</Properties>

## Return

Returns the next key and its corresponding value from the table. If there are no more key-value pairs, `nil` is returned.

## Description

The `next()` function provides a low-level mechanism for iterating through a table. If called with a valid key, it returns the next key-value pair in the table. If called with `nil` as the key, it returns the first key-value pair in the table. It is important to note that the order of key-value pairs is arbitrary.

## Examples

### Iterating through a table using next
```lua
local myTable = {
  name = "Bob",
  age = 25,
  job = "Artist"
}

local key, value = next(myTable)

while key do
  print(key, value)
  key, value = next(myTable, key)
end

-- Output:
-- name    Bob
-- age     25
-- job     Artist
```

### Getting the first key-value pair
```lua
local colors = {
  red = "#FF0000",
  green = "#00FF00",
  blue = "#0000FF"
}

local key, value = next(colors)

print(key, value)  -- Output: one of the key-value pairs, e.g., red    #FF0000
```

## See also
- `pairs()`: A higher-level function that uses `next()` for iterating through all key-value pairs in a table.
- `ipairs()`: Iterates over the numeric indices of a table in order.
````

## File: src/app/docs/functions/table/(utilities)/pairs/page.mdx
````
export const metadata = {
  title: 'pairs()',
  description: 'Iterates over all key-value pairs in a table.',
};

# pairs()

The `pairs()` function is used to iterate over all key-value pairs in a table, allowing you to access each key and its corresponding value. It returns an iterator function that can be used in a `for` loop or with the `ipairs()` function for more structured iteration.

## Syntax

```lua
pairs(table)
```

## Parameters

<Properties>
  <Property name="table" type="table">
    The table whose key-value pairs will be iterated over.
  </Property>
</Properties>

## Return

Returns an iterator function, which can be used to traverse the table. The iterator yields each key-value pair as a series of calls.

## Description

The `pairs()` function is particularly useful for iterating over non-numeric keys in a table or for tables with a mix of numeric and non-numeric keys. Unlike the `ipairs()` function, which iterates over only the numeric keys in a table in sequential order, `pairs()` iterates over all keys in an arbitrary order.

## Examples

### Iterating over a table with pairs
```lua
local myTable = {
  name = "Alice",
  age = 30,
  occupation = "Engineer"
}

for key, value in pairs(myTable) do
  print(key, value)
end

-- Output:
-- name    Alice
-- age     30
-- occupation    Engineer
```

### Using pairs with a mixed table
```lua
local mixedTable = {
  [1] = "First",
  [2] = "Second",
  color = "Blue",
  number = 42
}

for key, value in pairs(mixedTable) do
  print(key, value)
end

-- Output:
-- 1      First
-- 2      Second
-- color  Blue
-- number 42
```

## See also
- `ipairs()`: Iterates over the numeric indices of a table in order.
- `next()`: Retrieves the next key-value pair from a table iterator.
````

## File: src/app/docs/functions/table/(utilities)/rawget/page.mdx
````
export const metadata = {
  title: 'rawget()',
  description: 'Retrieves a value from a table without invoking the metatable\'s __index method.',
};

# rawget()

The `rawget()` function is used to retrieve a value from a table directly, bypassing any custom behavior defined in the table's metatable. This function allows you to access the value of a key in the table without triggering the `__index` metamethod, which is useful for cases where you want to avoid metatable interference.

## Syntax

```lua
rawget(table, key)
```

## Parameters

<Properties>
  <Property name="table" type="table">
    The table from which the value will be retrieved.
  </Property>
  <Property name="key" type="string|number">
    The key whose value will be fetched from the table.
  </Property>
</Properties>

## Return

Returns the value associated with the specified key in the table. If the key does not exist, `nil` is returned.

## Description

`rawget()` provides a way to access the contents of a table without triggering any of the metatable's methods that might alter the expected behavior of the table. This is particularly useful when you want to ensure that you are retrieving the raw data stored in the table, without any additional logic being executed.

## Examples

### Retrieving a value in a table with rawget
```lua
local myTable = { key = "value" }
setmetatable(myTable, {
  __index = function(t, key)
    return "Value not found for key: " .. key
  end
})

local value = rawget(myTable, "key")  -- This will not trigger __index
print(value)  -- Output: value
```

### Accessing values without triggering metatable behavior
```lua
local myData = { x = 10 }
local myMeta = {
  __index = function(t, key)
    print("Attempting to access " .. key)
    return nil
  end
}

setmetatable(myData, myMeta)

local xValue = rawget(myData, "x")  -- This will not trigger __index
print(xValue)  -- Output: 10
```

## See also
- `setmetatable()`: Sets the metatable for a table, allowing for custom behavior.
- `rawset()`: Sets a value in a table without invoking the metatable's `__newindex`.
- `getmetatable()`: Retrieves the metatable for a given table.
````

## File: src/app/docs/functions/table/(utilities)/rawset/page.mdx
````
export const metadata = {
  title: 'rawset()',
  description: 'Sets a value in a table without invoking the metatable\'s __newindex method.',
};

# rawset()

The `rawset()` function is used to set a value in a table directly, bypassing any custom behavior defined in the table's metatable. This function allows you to manipulate the table without triggering the `__newindex` metamethod, which is useful for cases where you want to avoid metatable interference.

## Syntax

```lua
rawset(table, key, value)
```

## Parameters

<Properties>
  <Property name="table" type="table">
    The table in which the value will be set.
  </Property>
  <Property name="key" type="string|number">
    The key under which the value will be stored in the table.
  </Property>
  <Property name="value" type="any">
    The value to be set in the table.
  </Property>
</Properties>

## Return

Returns the value that was set.

## Description

`rawset()` allows you to modify the contents of a table without triggering any of the metatable's methods that may alter the expected behavior of the table. This is particularly useful in scenarios where you want to maintain certain values without being affected by any overridden behaviors specified in the metatable.

## Examples

### Setting a value in a table with rawset
```lua
local myTable = {}
setmetatable(myTable, {
  __newindex = function(t, key, value)
    print("Attempting to set " .. key .. " to " .. value)
  end
})

rawset(myTable, "key", "value")  -- This will not trigger __newindex
print(myTable.key)  -- Output: value
```

### Modifying values without triggering metatable behavior
```lua
local myData = { x = 10 }
local myMeta = {
  __newindex = function(t, key, value)
    print("You cannot change " .. key)
  end
}

setmetatable(myData, myMeta)

rawset(myData, "x", 20)  -- This will not trigger __newindex
print(myData.x)  -- Output: 20
```

## See also
- `setmetatable()`: Sets the metatable for a table, allowing for custom behavior.
- `rawget()`: Retrieves a value from a table without invoking the metatable's `__index`.
- `getmetatable()`: Retrieves the metatable for a given table.
````

## File: src/app/docs/functions/table/(utilities)/setmetatable/page.mdx
````
export const metadata = {
  title: 'setmetatable()',
  description: 'Sets the metatable for a given table in Lua, allowing the customization of table behavior.',
};

# setmetatable()

The `setmetatable()` function is used to set or change the metatable for a given table in Lua. Metatables are tables that define how operations on another table behave. By setting a metatable, you can customize table behavior for operations like addition, indexing, and method calls.

## Syntax

```lua
setmetatable(table, metatable)
```

## Parameters

<Properties>
  <Property name="table" type="table">
    The table for which the metatable will be set.
  </Property>
  <Property name="metatable" type="table">
    The new metatable to be associated with the specified table.
  </Property>
</Properties>

## Return

Returns the table that was passed as the first parameter.

## Description

Using `setmetatable()`, you can define custom behaviors for table operations by utilizing fields in the metatable such as `__index`, `__newindex`, and others. This allows for powerful object-oriented programming techniques in Lua.

## Examples

### Setting a simple metatable
```lua
local myTable = {}
local myMetatable = {
  __index = function(t, key)
    return "Key " .. key .. " not found!"
  end
}

setmetatable(myTable, myMetatable)

print(myTable.someKey)  -- Output: Key someKey not found!
```

### Customizing table addition
```lua
local vector1 = { x = 1, y = 2 }
local vector2 = { x = 3, y = 4 }

setmetatable(vector1, {
  __add = function(v1, v2)
    return { x = v1.x + v2.x, y = v1.y + v2.y }
  end
})

local result = vector1 + vector2
print(result.x, result.y)  -- Output: 4 6
```

## See also
- `getmetatable()`: Retrieves the metatable for a given table.
- `rawset()`: Sets a value in a table without invoking the metatable's `__newindex`.
- `rawget()`: Retrieves a value from a table without invoking the metatable's `__index`.
````

## File: src/app/docs/functions/table/page.mdx
````
export const metadata = {
  title: 'Table Library in Lua',
  description:'',
}

# Table

The `table` object, referred to as arrays in other programming languages, enables the storage of various data types in Lua.

## Description
In Lua, `table` is the primary data structure for storing data. It can be used as arrays, objects, and even classes.

- Tables are indexed starting from 1.
- You can create multidimensional (2D) arrays.
- They are highly flexible and can contain mixed data types.

## Constructor
```lua
{}
```
Creates a new `table` object.

## Functions
`table` comes with a variety of functions to manipulate data:

- **`next()`**: Allows a program to traverse all fields of a table.
- **`setmetatable()`**: Sets the metatable for the table.
- **`getmetatable()`**: Returns the associated metatable.
- **`rawset()`**: Sets the value of `table[index]` directly, bypassing metatables.
- **`rawget()`**: Returns the value of `table[index]` directly.
- **`pairs()`**: Used to iterate over all key-value pairs in the table.
- **`ipairs()`**: Iterates numerically over the table.

## Instance Methods
Some common instance methods provided by the table library include:

- **`table.insert()`**: Adds an element to the table.
- **`table.remove()`**: Removes an element from the table.
- **`table.pack()`**: Packs elements into a new table.
- **`table.unpack()`**: Unpacks a table into values.
- **`table.concat()`**: Combines the elements of a table into a string.
- **`table.sort()`**: Sorts the elements in a table.
- **`table.move()`**: Moves a range of elements from one part of a table to another.

## Examples
This section provides examples of common table operations in Lua.

### Create a Table
```lua
local myTable = {}
print(type(myTable))

-- Expected Output: table
```

### Get Table Item by Index
```lua
local groceries = {
    { id = 3421, name = "Dark Chocolate", price = "$1.99" },
    { id = 4843, name = "Lemon", price = "$0.69" },
    { id = 2903, name = "Blender", price = "$42.00" }
}

print(groceries[3].name)

-- Expected Output: Blender
```

### Display Values of a Table
```lua
local groceries = {
    { id = 3421, name = "Dark Chocolate", price = "$1.99" },
    { id = 4843, name = "Lemon", price = "$0.69" },
    { id = 2903, name = "Blender", price = "$42.00" }
}

for index, data in ipairs(groceries) do
    print(index)
    for key, value in pairs(data) do
        print('\t', key, value)
    end
end

-- Expected Output:
-- 1
-- \t id 3421
-- \t name Dark Chocolate
-- \t price $1.99
-- 2
-- \t id 4843
-- \t name Lemon
-- \t price $0.69
-- 3
-- \t id 2903
-- \t name Blender
-- \t price $42.00
```

### Resemblance of a Class
```lua
local Class = {}

function Class.makeSound(sound)
    return sound
end

function Class.sit()
    -- code...
end

print(Class.makeSound("Woof!"))

-- Expected Output: Woof!
```

### Example for Other Programming Languages
```lua
-- Simulating an array-like structure (similar to JavaScript or Python)
local groceries = { "Bread", "Milk", "Eggs" }

print(table.concat(groceries, ", "))

-- Expected Output: Bread, Milk, Eggs
```

## Notes
The `table` library provides generic functions for table manipulation. It offers flexibility for building complex data structures while maintaining performance. When using operations dependent on table length, ensure proper indexing to avoid unexpected behavior.

For more advanced examples, explore additional Lua documentation or community resources.
````

## File: src/app/docs/functions/utf8/page.mdx
````
export const metadata = {
  title: 'utf8',
  description: '',
}

# utf8
````

## File: src/app/layout.tsx
````typescript
import { type Metadata } from 'next'
import glob from 'fast-glob'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/styles.scss'

export const metadata: Metadata = {
  title: {
    template: '%s - Lua | Version 5.4 Docs',
    default: 'Lua Version 5.4 Documentation',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
    </html>
  )
}
````

## File: src/app/logo.svg
````
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 14.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 43363)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="947px" height="947px" viewBox="0 0 947 947" enable-background="new 0 0 947 947" xml:space="preserve">
<g>
	<path fill="#000080" d="M835.5,473.6c0-199.8-162.2-362-362-362s-362,162.2-362,362c0,199.8,162.2,362,362,362
		S835.5,673.4,835.5,473.6"/>
	<path fill="#FFFFFF" d="M729.5,323.6c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S729.5,382.1,729.5,323.6"
		/>
	<path fill="#000080" d="M941.5,111.5c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S941.5,170.1,941.5,111.5"
		/>
	<g>
		<path fill="#FFFFFF" d="M258.1,627.8h117.3v26.7H227.8V417h30.3V627.8z"/>
		<path fill="#FFFFFF" d="M515.5,654.5v-23.8c-16,22.5-31.9,31.3-57,31.3c-33.2,0-54.4-18.2-54.4-46.6V483.8h27v120.9
			c0,20.5,13.7,33.6,35.2,33.6c28.3,0,46.6-22.8,46.6-57.7v-96.8h27v170.7H515.5z"/>
		<path fill="#FFFFFF" d="M738.4,659.1c-8.8,2.3-13,2.9-18.6,2.9c-17.6,0-26.1-7.8-28-25.1c-19.2,17.6-36.5,25.1-58,25.1
			c-34.5,0-56-19.5-56-50.5c0-22.2,10.1-37.5,30-45.6c10.4-4.2,16.3-5.5,54.7-10.4c21.5-2.6,28.3-7.5,28.3-18.9v-7.2
			c0-16.3-13.7-25.4-38.1-25.4c-25.4,0-37.8,9.4-40.1,30.3h-27.4c0.7-16.9,3.9-26.7,11.7-35.5c11.4-12.7,31.9-19.9,56.7-19.9
			c42,0,64.2,16.3,64.2,46.6v100.4c0,8.5,5.2,13.4,14.7,13.4c1.6,0,2.9,0,5.9-0.7V659.1z M690.8,570.1c-9.1,4.2-15,5.5-43.7,9.4
			c-29,4.2-41.1,13.4-41.1,31.3c0,17.3,12.4,27.4,33.6,27.4c16,0,29.3-5.2,40.4-15.3c8.1-7.5,10.8-13,10.8-22.2V570.1z"/>
	</g>
	<path fill="none" stroke="#808080" stroke-width="10.8612" stroke-miterlimit="10" stroke-dasharray="40.8475" d="M890.6,261
		c33.5,65.8,51,138.6,51,212.5c0,258.4-209.7,468.1-468.1,468.1S5.4,731.9,5.4,473.5C5.4,215.1,215.1,5.4,473.5,5.4
		c83.1,0,164.6,22.1,236.2,63.9"/>
</g>
</svg>
````

## File: src/app/not-found.tsx
````typescript
import { Button } from '@/components/Button'
import { HeroPattern } from '@/components/HeroPattern'

export default function NotFound() {
  return (
    <>
      <HeroPattern />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" arrow="right" className="mt-8">
          Back to docs
        </Button>
      </div>
    </>
  )
}
````

## File: src/app/page.mdx
````
import { Guides } from '@/components/Guides'
import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'

export const metadata = {
  title: 'API Documentation',
  description: 'Learn everything there is to know about the Lua API and integrate Lua into your product.',
}

export const sections = [
  { title: 'Guides', id: 'guides' },
  { title: 'Resources', id: 'resources' },
]

<HeroPattern />

# API Documentation

Use the Lua API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Lua users. {{ className: 'lead' }}

<div className="not-prose mt-6 mb-16 flex gap-3">
  <Button href="/quickstart" arrow="right">
    <>Quickstart</>
  </Button>
  <Button href="/sdks" variant="outline">
    <>Explore SDKs</>
  </Button>
</div>

## Getting started {{ anchor: false }}

To get started, create a new application in your [developer settings](#), then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our [integrations directory](#) to reach the Lua community. {{ className: 'lead' }}

<div className="not-prose">
  <Button href="/sdks" variant="text" arrow="right">
    <>Get your API key</>
  </Button>
</div>

<Guides />

<Resources />
````

## File: src/app/providers.tsx
````typescript
'use client'

import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  )
}
````

## File: src/components/icons/BellIcon.tsx
````typescript
export function BellIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.438 8.063a5.563 5.563 0 0 1 11.125 0v2.626c0 1.182.34 2.34.982 3.332L17.5 15.5h-15l.955-1.479c.641-.993.982-2.15.982-3.332V8.062Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15.5v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v0"
      />
    </svg>
  )
}
````

## File: src/components/icons/BoltIcon.tsx
````typescript
export function BoltIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 11.5 10 2v5.5a1 1 0 0 0 1 1h4.5L10 18v-5.5a1 1 0 0 0-1-1H4.5Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/BookIcon.tsx
````typescript
export function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 5.5-7.5-3v12l7.5 3m0-12 7.5-3v12l-7.5 3m0-12v12"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17.5 2.5-7.5 3v12l7.5-3v-12Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/CalendarIcon.tsx
````typescript
export function CalendarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2h-15v-2Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 5.5v-3M14.5 5.5v-3"
      />
    </svg>
  )
}
````

## File: src/components/icons/CartIcon.tsx
````typescript
export function CartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.98 11.288 3.5 5.5h14l-2.48 5.788A2 2 0 0 1 13.18 12.5H7.82a2 2 0 0 1-1.838-1.212Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.5 5.5 2.48 5.788A2 2 0 0 0 7.82 12.5h5.362a2 2 0 0 0 1.839-1.212L17.5 5.5h-14Zm0 0-1-2M6.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM14.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/ChatBubbleIcon.tsx
````typescript
export function ChatBubbleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.5h5M8.5 11.5h3"
      />
    </svg>
  )
}
````

## File: src/components/icons/CheckIcon.tsx
````typescript
export function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 10.5 2 2c1-3.5 3-5 3-5"
      />
    </svg>
  )
}
````

## File: src/components/icons/ChevronRightLeftIcon.tsx
````typescript
export function ChevronRightLeftIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 10A6.5 6.5 0 0 1 8 3.5h4a6.5 6.5 0 1 1 0 13H8A6.5 6.5 0 0 1 1.5 10Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 7.5-3 2.5 3 2.5M12.5 7.5l3 2.5-3 2.5"
      />
    </svg>
  )
}
````

## File: src/components/icons/ClipboardIcon.tsx
````typescript
export function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 6v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1l-.447.894A2 2 0 0 1 11.263 6H8.737a2 2 0 0 1-1.789-1.106L6.5 4h-1a2 2 0 0 0-2 2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13.5 4-.447.894A2 2 0 0 1 11.263 6H8.737a2 2 0 0 1-1.789-1.106L6.5 4l.724-1.447A1 1 0 0 1 8.118 2h3.764a1 1 0 0 1 .894.553L13.5 4Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/CogIcon.tsx
````typescript
export function CogIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        fillRule="evenodd"
        d="M11.063 1.5H8.937l-.14 1.128c-.086.682-.61 1.22-1.246 1.484-.634.264-1.37.247-1.912-.175l-.898-.699-1.503 1.503.699.898c.422.543.44 1.278.175 1.912-.264.635-.802 1.16-1.484 1.245L1.5 8.938v2.124l1.128.142c.682.085 1.22.61 1.484 1.244.264.635.247 1.37-.175 1.913l-.699.898 1.503 1.503.898-.699c.543-.422 1.278-.44 1.912-.175.635.264 1.16.801 1.245 1.484l.142 1.128h2.124l.142-1.128c.085-.683.61-1.22 1.244-1.484.635-.264 1.37-.247 1.913.175l.898.699 1.503-1.503-.699-.898c-.422-.543-.44-1.278-.175-1.913.264-.634.801-1.16 1.484-1.245l1.128-.14V8.937l-1.128-.14c-.683-.086-1.22-.611-1.484-1.246-.264-.634-.247-1.37.175-1.912l.699-.898-1.503-1.503-.898.699c-.543.422-1.278.44-1.913.175-.634-.264-1.16-.802-1.244-1.484L11.062 1.5ZM10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.938 1.5h2.124l.142 1.128c.085.682.61 1.22 1.244 1.484v0c.635.264 1.37.247 1.913-.175l.898-.699 1.503 1.503-.699.898c-.422.543-.44 1.278-.175 1.912v0c.264.635.801 1.16 1.484 1.245l1.128.142v2.124l-1.128.142c-.683.085-1.22.61-1.484 1.244v0c-.264.635-.247 1.37.175 1.913l.699.898-1.503 1.503-.898-.699c-.543-.422-1.278-.44-1.913-.175v0c-.634.264-1.16.801-1.245 1.484l-.14 1.128H8.937l-.14-1.128c-.086-.683-.611-1.22-1.246-1.484v0c-.634-.264-1.37-.247-1.912.175l-.898.699-1.503-1.503.699-.898c.422-.543.44-1.278.175-1.913v0c-.264-.634-.802-1.16-1.484-1.245l-1.128-.14V8.937l1.128-.14c.682-.086 1.22-.61 1.484-1.246v0c.264-.634.247-1.37-.175-1.912l-.699-.898 1.503-1.503.898.699c.543.422 1.278.44 1.912.175v0c.635-.264 1.16-.802 1.245-1.484L8.938 1.5Z"
      />
      <circle cx="10" cy="10" r="2.5" fill="none" />
    </svg>
  )
}
````

## File: src/components/icons/CopyIcon.tsx
````typescript
export function CopyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 5.5v-1a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 7.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/DocumentIcon.tsx
````typescript
export function DocumentIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 4.5v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-5v-5h-6a2 2 0 0 0-2 2Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 2.5 5 5"
      />
    </svg>
  )
}
````

## File: src/components/icons/EnvelopeIcon.tsx
````typescript
export function EnvelopeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/FaceSmileIcon.tsx
````typescript
export function FaceSmileIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 6.5v2M12.5 6.5v2M5.5 11.5s1 3 4.5 3 4.5-3 4.5-3"
      />
    </svg>
  )
}
````

## File: src/components/icons/FolderIcon.tsx
````typescript
export function FolderIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 15.5v-8a2 2 0 0 0-2-2h-2.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.43 2.5H4.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2Z"
      />
      <path
        strokeWidth="0"
        d="M8.43 2.5H4.5a2 2 0 0 0-2 2v1h9l-1.406-2.11A2 2 0 0 0 8.43 2.5Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 5.5-1.406-2.11A2 2 0 0 0 8.43 2.5H4.5a2 2 0 0 0-2 2v1h9Zm0 0h2"
      />
    </svg>
  )
}
````

## File: src/components/icons/LinkIcon.tsx
````typescript
export function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.056 11.5-1.221-1.222a4.556 4.556 0 0 1 6.443-6.443L11.5 5.056M7.5 7.5l5 5m2.444-4 1.222 1.222a4.556 4.556 0 0 1-6.444 6.444L8.5 14.944"
      />
    </svg>
  )
}
````

## File: src/components/icons/ListIcon.tsx
````typescript
export function ListIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 4.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 6.5h7M6.5 13.5h7M6.5 10h7"
      />
    </svg>
  )
}
````

## File: src/components/icons/MagnifyingGlassIcon.tsx
````typescript
export function MagnifyingGlassIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path strokeWidth="0" d="M2.5 8.5a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 13 4.5 4.5m-9-3a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/MapPinIcon.tsx
````typescript
export function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.5A5.5 5.5 0 0 0 4.5 8c0 3.038 5.5 9.5 5.5 9.5s5.5-6.462 5.5-9.5A5.5 5.5 0 0 0 10 2.5Zm0 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 8a5.5 5.5 0 1 1 11 0c0 3.038-5.5 9.5-5.5 9.5S4.5 11.038 4.5 8Z"
      />
      <circle cx="10" cy="8" r="1.5" fill="none" />
    </svg>
  )
}
````

## File: src/components/icons/PackageIcon.tsx
````typescript
export function PackageIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="m10 9.5-7.5-4v9l7.5 4v-9ZM10 9.5l7.5-4v9l-7.5 4v-9Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.5 5.5 7.5 4m-7.5-4v9l7.5 4m-7.5-13 7.5-4 7.5 4m-7.5 4v9m0-9 7.5-4m-7.5 13 7.5-4v-9m-11 6 .028-3.852L13.5 3.5"
      />
    </svg>
  )
}
````

## File: src/components/icons/PaperAirplaneIcon.tsx
````typescript
export function PaperAirplaneIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 3L1 9L8 12M17 3L11 19L8 12M17 3L8 12"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19L8 12L17 3L11 19Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/PaperClipIcon.tsx
````typescript
export function PaperClipIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.56 7.375-3.678-3.447c-2.032-1.904-5.326-1.904-7.358 0s-2.032 4.99 0 6.895l6.017 5.639c1.477 1.384 3.873 1.384 5.35 0 1.478-1.385 1.478-3.63 0-5.015L10.21 6.122a1.983 1.983 0 0 0-2.676 0 1.695 1.695 0 0 0 0 2.507l4.013 3.76"
      />
    </svg>
  )
}
````

## File: src/components/icons/ShapesIcon.tsx
````typescript
export function ShapesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 7.5v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM11.5 16.5v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.5 17.5 3-6 3 6h-6ZM14.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/ShirtIcon.tsx
````typescript
export function ShirtIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 1.5s0 2-2.5 2-2.5-2-2.5-2h-2L2.207 4.793a1 1 0 0 0 0 1.414L4.5 8.5v10h11v-10l2.293-2.293a1 1 0 0 0 0-1.414L14.5 1.5h-2Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/SquaresPlusIcon.tsx
````typescript
export function SquaresPlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 4.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2ZM8.5 13.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2ZM17.5 4.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 11.5v6M17.5 14.5h-6"
      />
    </svg>
  )
}
````

## File: src/components/icons/TagIcon.tsx
````typescript
export function TagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8.69499V3H8.69499C9.18447 3 9.65389 3.19444 10 3.54055L16.4594 10C17.1802 10.7207 17.1802 11.8893 16.4594 12.61L12.61 16.4594C11.8893 17.1802 10.7207 17.1802 10 16.4594L3.54055 10C3.19444 9.65389 3 9.18447 3 8.69499ZM7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.17157 8.5 7 8.5Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3V8.69499C3 9.18447 3.19444 9.65389 3.54055 10L10 16.4594C10.7207 17.1802 11.8893 17.1802 12.61 16.4594L16.4594 12.61C17.1802 11.8893 17.1802 10.7207 16.4594 10L10 3.54055C9.65389 3.19444 9.18447 3 8.69499 3H3Z"
      />
      <circle cx="7" cy="7" r="1.5" fill="none" />
    </svg>
  )
}
````

## File: src/components/icons/UserIcon.tsx
````typescript
export function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      />
    </svg>
  )
}
````

## File: src/components/icons/UsersIcon.tsx
````typescript
export function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      />
    </svg>
  )
}
````

## File: src/components/Button.tsx
````typescript
import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-sky-400/10 dark:text-blue-400 dark:ring-1 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-blue-300 dark:hover:ring-sky-300',
  secondary:
    'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-400',
  outline:
    'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
  arrow?: 'left' | 'right'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className,
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1',
      )}
    />
  )

  let inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
````

## File: src/components/Code.tsx
````typescript
'use client'

import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { create } from 'zustand'

import { Tag } from '@/components/Tag'

const languageNames: Record<string, string> = {
  js: 'JavaScript',
  ts: 'TypeScript',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  go: 'Go',
}

function getPanelTitle({
  title,
  language,
}: {
  title?: string
  language?: string
}) {
  if (title) {
    return title
  }
  if (language && language in languageNames) {
    return languageNames[language]
  }
  return 'Code'
}

function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  )
}

function CopyButton({ code }: { code: string }) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={clsx(
        'group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pr-3 pl-2 text-2xs font-medium opacity-0 backdrop-blur-sm transition group-hover:opacity-100 focus:opacity-100',
        copied
          ? 'bg-sky-400/10 ring-1 ring-sky-400/20 ring-inset'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={clsx(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-blue-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied!
      </span>
    </button>
  )
}

function CodePanelHeader({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null
  }

  return (
    <div className="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1">
      {tag && (
        <div className="dark flex">
          <Tag variant="small">{tag}</Tag>
        </div>
      )}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  )
}

function CodePanel({
  children,
  tag,
  label,
  code,
}: {
  children: React.ReactNode
  tag?: string
  label?: string
  code?: string
}) {
  let child = Children.only(children)

  if (isValidElement(child)) {
    tag = child.props.tag ?? tag
    label = child.props.label ?? label
    code = child.props.code ?? code
  }

  if (!code) {
    throw new Error(
      '`CodePanel` requires a `code` prop, or a child with a `code` prop.',
    )
  }

  return (
    <div className="group dark:bg-white/2.5">
      <CodePanelHeader tag={tag} label={label} />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  )
}

function CodeGroupHeader({
  title,
  children,
  selectedIndex,
}: {
  title: string
  children: React.ReactNode
  selectedIndex: number
}) {
  let hasTabs = Children.count(children) > 1

  if (!title && !hasTabs) {
    return null
  }

  return (
    <div className="flex min-h-[calc(--spacing(12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
      {title && (
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <TabList className="-mb-px flex gap-4 text-xs font-medium">
          {Children.map(children, (child, childIndex) => (
            <Tab
              className={clsx(
                'border-b py-3 transition data-selected:not-data-focus:outline-hidden',
                childIndex === selectedIndex
                  ? 'border-sky-500 text-blue-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-300',
              )}
            >
              {getPanelTitle(isValidElement(child) ? child.props : {})}
            </Tab>
          ))}
        </TabList>
      )}
    </div>
  )
}

function CodeGroupPanels({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodePanel>) {
  let hasTabs = Children.count(children) > 1

  if (hasTabs) {
    return (
      <TabPanels>
        {Children.map(children, (child) => (
          <TabPanel>
            <CodePanel {...props}>{child}</CodePanel>
          </TabPanel>
        ))}
      </TabPanels>
    )
  }

  return <CodePanel {...props}>{children}</CodePanel>
}

function usePreventLayoutShift() {
  let positionRef = useRef<HTMLElement>(null)
  let rafRef = useRef<number>()

  useEffect(() => {
    return () => {
      if (typeof rafRef.current !== 'undefined') {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return {
    positionRef,
    preventLayoutShift(callback: () => void) {
      if (!positionRef.current) {
        return
      }

      let initialTop = positionRef.current.getBoundingClientRect().top

      callback()

      rafRef.current = window.requestAnimationFrame(() => {
        let newTop =
          positionRef.current?.getBoundingClientRect().top ?? initialTop
        window.scrollBy(0, newTop - initialTop)
      })
    },
  }
}

const usePreferredLanguageStore = create<{
  preferredLanguages: Array<string>
  addPreferredLanguage: (language: string) => void
}>()((set) => ({
  preferredLanguages: [],
  addPreferredLanguage: (language) =>
    set((state) => ({
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          (preferredLanguage) => preferredLanguage !== language,
        ),
        language,
      ],
    })),
}))

function useTabGroupProps(availableLanguages: Array<string>) {
  let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore()
  let [selectedIndex, setSelectedIndex] = useState(0)
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a),
  )[0]
  let languageIndex = availableLanguages.indexOf(activeLanguage)
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex)
  }

  let { positionRef, preventLayoutShift } = usePreventLayoutShift()

  return {
    as: 'div' as const,
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex: number) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex]),
      )
    },
  }
}

const CodeGroupContext = createContext(false)

export function CodeGroup({
  children,
  title,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodeGroupPanels> & { title: string }) {
  let languages =
    Children.map(children, (child) =>
      getPanelTitle(isValidElement(child) ? child.props : {}),
    ) ?? []
  let tabGroupProps = useTabGroupProps(languages)
  let hasTabs = Children.count(children) > 1

  let containerClassName =
    'my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10'
  let header = (
    <CodeGroupHeader title={title} selectedIndex={tabGroupProps.selectedIndex}>
      {children}
    </CodeGroupHeader>
  )
  let panels = <CodeGroupPanels {...props}>{children}</CodeGroupPanels>

  return (
    <CodeGroupContext.Provider value={true}>
      {hasTabs ? (
        <TabGroup {...tabGroupProps} className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </TabGroup>
      ) : (
        <div className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </div>
      )}
    </CodeGroupContext.Provider>
  )
}

export function Code({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'code'>) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    if (typeof children !== 'string') {
      throw new Error(
        '`Code` children must be a string when nested inside a `CodeGroup`.',
      )
    }
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
  }

  return <code {...props}>{children}</code>
}

export function Pre({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodeGroup>) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    return children
  }

  return <CodeGroup {...props}>{children}</CodeGroup>
}
````

## File: src/components/Feedback.tsx
````typescript
'use client'

import { forwardRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

function FeedbackButton(
  props: Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'className'>,
) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

const FeedbackForm = forwardRef<
  React.ElementRef<'form'>,
  React.ComponentPropsWithoutRef<'form'>
>(function FeedbackForm({ onSubmit, className, ...props }, ref) {
  return (
    <form
      {...props}
      ref={ref}
      onSubmit={onSubmit}
      className={clsx(
        className,
        'absolute inset-0 flex items-center justify-center gap-6 md:justify-start',
      )}
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr_1px_1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-zinc-900/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  )
})

const FeedbackThanks = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(function FeedbackThanks({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'absolute inset-0 flex justify-center md:justify-start',
      )}
    >
      <div className="flex items-center gap-3 rounded-full bg-sky-50/50 py-1 pr-3 pl-1.5 text-sm text-blue-900 ring-1 ring-sky-500/20 ring-inset dark:bg-sky-500/5 dark:text-blue-200 dark:ring-sky-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-sky-500 stroke-white dark:fill-sky-200/20 dark:stroke-sky-200" />
        Thanks for your feedback!
      </div>
    </div>
  )
})

export function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // event.nativeEvent.submitter.dataset.response
    // => "yes" or "no"

    setSubmitted(true)
  }

  return (
    <div className="relative h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-closed:opacity-0 data-leave:pointer-events-none"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-closed:opacity-0" />
      </Transition>
    </div>
  )
}
````

## File: src/components/Footer.tsx
````typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { navigation } from '@/app/docs/_components/Navigation'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: { href: string; title: string }
  previous?: boolean
}) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  // let pathname = usePathname()
  // let allPages = navigation.flatMap((group) => group.links)
  // let currentPageIndex = allPages.findIndex((page) => page.href === pathname)

  // if (currentPageIndex === -1) {
  //   return null
  // }

  // let previousPage = allPages[currentPageIndex - 1]
  // let nextPage = allPages[currentPageIndex + 1]

  // if (!previousPage && !nextPage) {
  //   return null
  // }

  return (
    <div className="flex">
      {/* {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )} */}
    </div>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M11.1527 8.92804L16.2525 3H15.044L10.6159 8.14724L7.07919 3H3L8.34821 10.7835L3 17H4.20855L8.88474 11.5643L12.6198 17H16.699L11.1524 8.92804H11.1527ZM9.49748 10.8521L8.95559 10.077L4.644 3.90978H6.50026L9.97976 8.88696L10.5216 9.66202L15.0446 16.1316H13.1883L9.49748 10.8524V10.8521Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  )
}

function DiscordIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z" />
    </svg>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-4">
        <SocialLink href="#" icon={XIcon}>
          Follow us on X
        </SocialLink>
        <SocialLink href="https://github.com/AurelianSpodarec/LuaDocs" icon={GitHubIcon}>
          Follow us on GitHub
        </SocialLink>
        <SocialLink href="https://discord.gg/Jp2HFx3KTH" icon={DiscordIcon}>
          Join our Discord server
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
````

## File: src/components/GridPattern.tsx
````typescript
import { useId } from 'react'

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  width: number
  height: number
  x: string | number
  y: string | number
  squares: Array<[x: number, y: number]>
}) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
````

## File: src/components/Guides.tsx
````typescript
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication',
    name: 'Authentication',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/pagination',
    name: 'Pagination',
    description: 'Understand how to work with paginated responses.',
  },
  {
    href: '/errors',
    name: 'Errors',
    description:
      'Read about the different types of errors returned by the API.',
  },
  {
    href: '/webhooks',
    name: 'Webhooks',
    description:
      'Learn how to programmatically configure webhooks for your app.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: src/components/Heading.tsx
````typescript
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useInView } from 'framer-motion'

import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'

function AnchorIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  )
}

function Eyebrow({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null
  }

  return (
    <div className="flex items-center gap-x-3">
      {tag && <Tag>{tag}</Tag>}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  )
}

function Anchor({
  id,
  inView,
  children,
}: {
  id: string
  inView: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={`#${id}`}
      className="group text-inherit no-underline hover:text-inherit"
    >
      {inView && (
        <div className="absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(var(--container-lg)+(--spacing(8)))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:--spacing(10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-zinc-300 transition ring-inset hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
            <AnchorIcon className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white" />
          </div>
        </div>
      )}
      {children}
    </Link>
  )
}

export function Heading<Level extends 2 | 3>({
  children,
  tag,
  label,
  level,
  anchor = true,
  ...props
}: React.ComponentPropsWithoutRef<`h${Level}`> & {
  id: string
  tag?: string
  label?: string
  level?: Level
  anchor?: boolean
}) {
  level = level ?? (2 as Level)
  let Component = `h${level}` as 'h2' | 'h3'
  let ref = useRef<HTMLHeadingElement>(null)
  let registerHeading = useSectionStore((s) => s.registerHeading)

  let inView = useInView(ref, {
    margin: `${remToPx(-3.5)}px 0px 0px 0px`,
    amount: 'all',
  })

  useEffect(() => {
    if (level === 2) {
      registerHeading({ id: props.id, ref, offsetRem: tag || label ? 8 : 6 })
    }
  })

  return (
    <>
      <Eyebrow tag={tag} label={label} />
      <Component
        ref={ref}
        className={tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24'}
        {...props}
      >
        {anchor ? (
          <Anchor id={props.id} inView={inView}>
            {children}
          </Anchor>
        ) : (
          children
        )}
      </Component>
    </>
  )
}
````

## File: src/components/HeroPattern.tsx
````typescript
import { GridPattern } from '@/components/GridPattern'

export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-linear-to-r from-[#007bff] to-[#87cefa] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#007bff]/30 dark:to-[#87cefa]/30 dark:opacity-100">
          <GridPattern
            width={72}
            height={56}
            x={-12}
            y={4}
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
          />
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
        </svg>
      </div>
    </div>
  )
}
````

## File: src/components/Layout.tsx
````typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/app/docs/_components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { type Section, SectionProvider } from '@/components/SectionProvider'
import { HeroPattern } from './HeroPattern'
// import TableOfContents from './table-of-contents'
// import { getSectionAndTitleBySlug } from '@/lib/api'

export function Layout({ children, allSections }: { children: React.ReactNode, allSections: Record<string, Array<Section>> }) {
  let pathname = usePathname()

  console.log(pathname)
  // export default async function DocPage(props: Props) {
  // let params = await props.params;

  // let sectionAndTitle = getSectionAndTitleBySlug(pathname);

  // let [post, tableOfContents] = await Promise.all([
  //   getDocPageBySlug(params.slug),
  //   generateTableOfContents(params.slug),
  // ]);

  // if (!post) {
  //   return notFound();
  // }


  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <HeroPattern />
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-8" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>

        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
          {/* <h1>{allSections[pathname]}</h1> */}
          <main className="flex-auto">{children}</main>

          <div className="max-xl:hidden">
            <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
              {/* {navigation.map((group, groupIndex) => (
                <NavigationGroup
                  key={group.title}
                  group={group}
                  className={groupIndex === 0 ? 'md:mt-0' : ''}
                />
                
              ))} */}
              {/* <TableOfContents tableOfContents={ } /> */}
              Table of Contents
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
````

## File: src/components/Libraries.tsx
````typescript
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'

const libraries = [
  {
    href: '#',
    name: 'PHP',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    logo: logoPhp,
  },
  {
    href: '#',
    name: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: logoRuby,
  },
  {
    href: '#',
    name: 'Node.js',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: logoNode,
  },
  {
    href: '#',
    name: 'Python',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    logo: logoPython,
  },
  {
    href: '#',
    name: 'Go',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: logoGo,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
````

## File: src/components/Logo.tsx
````typescript
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        x='0'
        y='0'
        version='1'
        viewBox='0 0 947 947'
      >
        <path
          fill='navy'
          d='M835.5 473.6c0-199.8-162.2-362-362-362s-362 162.2-362 362 162.2 362 362 362 362-162.2 362-362'
        ></path>
        <path
          fill='#FFF'
          d='M729.5 323.6c0-58.5-47.5-106-106-106s-106 47.5-106 106 47.5 106 106 106 106-47.5 106-106'
        ></path>
        <path
          fill='navy'
          d='M941.5 111.5c0-58.5-47.5-106-106-106s-106 47.5-106 106 47.5 106 106 106 106-47.4 106-106'
        ></path>
        <g fill='#FFF'>
          <path d='M258.1 627.8h117.3v26.7H227.8V417h30.3zM515.5 654.5v-23.8c-16 22.5-31.9 31.3-57 31.3-33.2 0-54.4-18.2-54.4-46.6V483.8h27v120.9c0 20.5 13.7 33.6 35.2 33.6 28.3 0 46.6-22.8 46.6-57.7v-96.8h27v170.7zM738.4 659.1c-8.8 2.3-13 2.9-18.6 2.9-17.6 0-26.1-7.8-28-25.1-19.2 17.6-36.5 25.1-58 25.1-34.5 0-56-19.5-56-50.5 0-22.2 10.1-37.5 30-45.6 10.4-4.2 16.3-5.5 54.7-10.4 21.5-2.6 28.3-7.5 28.3-18.9v-7.2c0-16.3-13.7-25.4-38.1-25.4-25.4 0-37.8 9.4-40.1 30.3h-27.4c.7-16.9 3.9-26.7 11.7-35.5 11.4-12.7 31.9-19.9 56.7-19.9 42 0 64.2 16.3 64.2 46.6v100.4c0 8.5 5.2 13.4 14.7 13.4 1.6 0 2.9 0 5.9-.7zm-47.6-89c-9.1 4.2-15 5.5-43.7 9.4-29 4.2-41.1 13.4-41.1 31.3 0 17.3 12.4 27.4 33.6 27.4 16 0 29.3-5.2 40.4-15.3 8.1-7.5 10.8-13 10.8-22.2z'></path>
        </g>
        <path
          fill='none'
          stroke='gray'
          strokeDasharray='40.847'
          strokeMiterlimit='10'
          strokeWidth='10.861'
          d='M890.6 261c33.5 65.8 51 138.6 51 212.5 0 258.4-209.7 468.1-468.1 468.1S5.4 731.9 5.4 473.5 215.1 5.4 473.5 5.4c83.1 0 164.6 22.1 236.2 63.9'
        ></path>
      </svg>
      <span className="text-xl font-bold">Lua</span>
    </div>
  )
}
````

## File: src/components/mdx.tsx
````typescript
import Link from 'next/link'
import clsx from 'clsx'

import { Feedback } from '@/components/Feedback'
import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col pt-16 pb-10">
      <Prose className="flex-auto">{children}</Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        <Feedback />
      </footer>
    </article>
  )
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-sky-500/20 bg-sky-50/50 p-4 text-sm/6 text-blue-900 dark:border-sky-500/30 dark:bg-sky-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:var(--color-sky-300)] dark:[--tw-prose-links:var(--color-white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-sky-500 stroke-white dark:fill-sky-200/20 dark:stroke-sky-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
}: {
  name: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
````

## File: src/components/MobileNavigation.tsx
````typescript
'use client'

import { createContext, Suspense, useContext, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  TransitionChild,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import { create } from 'zustand'

import { Header } from '@/app/docs/_components/Header'
import { Navigation } from '@/components/Navigation'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  )
}

const IsInsideMobileNavigationContext = createContext(false)

function MobileNavigationDialog({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  let pathname = usePathname()
  let searchParams = useSearchParams()
  let initialPathname = useRef(pathname).current
  let initialSearchParams = useRef(searchParams).current

  useEffect(() => {
    if (pathname !== initialPathname || searchParams !== initialSearchParams) {
      close()
    }
  }, [pathname, searchParams, close, initialPathname, initialSearchParams])

  function onClickDialog(event: React.MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLElement)) {
      return
    }

    let link = event.target.closest('a')
    if (
      link &&
      link.pathname + link.search + link.hash ===
        window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClickCapture={onClickDialog}
      onClose={close}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-xs data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-black/40"
      />

      <DialogPanel>
        <TransitionChild>
          <Header className="data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
        </TransitionChild>

        <TransitionChild>
          <motion.div
            layoutScroll
            className="fixed top-14 bottom-0 left-0 w-full overflow-y-auto bg-white px-4 pt-6 pb-4 ring-1 shadow-lg shadow-zinc-900/10 ring-zinc-900/7.5 duration-500 ease-in-out data-closed:-translate-x-full min-[416px]:max-w-sm sm:px-6 sm:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <Navigation />
          </motion.div>
        </TransitionChild>
      </DialogPanel>
    </Dialog>
  )
}

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext)
}

export const useMobileNavigationStore = create<{
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function MobileNavigation() {
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let { isOpen, toggle, close } = useMobileNavigationStore()
  let ToggleIcon = isOpen ? XIcon : MenuIcon

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-zinc-900 dark:stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <Suspense fallback={null}>
          <MobileNavigationDialog isOpen={isOpen} close={close} />
        </Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  )
}
````

## File: src/components/Navigation.tsx
````typescript
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { INavGroup, navigation } from '@/app/docs/_components/Navigation'

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
}: {
  href: string
  children: React.ReactNode
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

// function VisibleSectionHighlight({
//   group,
//   pathname,
// }: {
//   group: INavGroup
//   pathname: string
// }) {
//   let [sections, visibleSections] = useInitialValue(
//     [
//       useSectionStore((s) => s.sections),
//       useSectionStore((s) => s.visibleSections),
//     ],
//     useIsInsideMobileNavigation(),
//   )

//   let isPresent = useIsPresent()
//   let firstVisibleSectionIndex = Math.max(
//     0,
//     [{ id: '_top' }, ...sections].findIndex(
//       (section) => section.id === visibleSections[0],
//     ),
//   )
//   let itemHeight = remToPx(2)
//   let height = isPresent
//     ? Math.max(1, visibleSections.length) * itemHeight
//     : itemHeight
//   let top =
//     group.links.findIndex((link) => link.href === pathname) * itemHeight +
//     firstVisibleSectionIndex * itemHeight

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { delay: 0.2 } }}
//       exit={{ opacity: 0 }}
//       className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
//       style={{ borderRadius: 8, height, top }}
//     />
//   )
// }

// function ActivePageMarker({
//   group,
//   pathname,
// }: {
//   group: INavGroup
//   pathname: string
// }) {
//   let itemHeight = remToPx(2)
//   let offset = remToPx(0.25)
//   let activePageIndex = group.links.findIndex((link) => link.href === pathname)
//   let top = offset + activePageIndex * itemHeight

//   return (
//     <motion.div
//       layout
//       className="absolute left-2 h-6 w-px bg-blue-500"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { delay: 0.2 } }}
//       exit={{ opacity: 0 }}
//       style={{ top }}
//     />
//   )
// }

// export function NavigationGroup({
//   group,
//   className,
// }: {
//   group: INavGroup
//   className?: string
// }) {
//   // If this is the mobile navigation then we always render the initial
//   // state, so that the state does not change during the close animation.
//   // The state will still update when we re-open (re-render) the navigation.
//   let isInsideMobileNavigation = useIsInsideMobileNavigation()
//   let [pathname, sections] = useInitialValue(
//     [usePathname(), useSectionStore((s) => s.sections)],
//     isInsideMobileNavigation,
//   )

//   let isActiveGroup =
//     group.links.findIndex((link) => link.href === pathname) !== -1

//   return (
//     <li className={clsx('relative mt-6', className)}>
//       <motion.h2
//         layout="position"
//         className="text-xs font-semibold text-zinc-900 dark:text-white"
//       >
//         {group.title}
//       </motion.h2>
//       <div className="relative mt-3 pl-2">
//         <AnimatePresence initial={!isInsideMobileNavigation}>
//           {isActiveGroup && (
//             <VisibleSectionHighlight group={group} pathname={pathname} />
//           )}
//         </AnimatePresence>
//         <motion.div
//           layout
//           className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
//         />
//         <AnimatePresence initial={false}>
//           {isActiveGroup && (
//             <ActivePageMarker group={group} pathname={pathname} />
//           )}
//         </AnimatePresence>
//         <ul role="list" className="border-l border-transparent">
//           {group.links.map((link) => (
//             <motion.li key={link.href} layout="position" className="relative">
//               <NavLink href={link.href} active={link.href === pathname}>
//                 {link.title}
//               </NavLink>
//               <AnimatePresence mode="popLayout" initial={false}>
//                 {link.href === pathname && sections.length > 0 && (
//                   <motion.ul
//                     role="list"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: 1,
//                       transition: { delay: 0.1 },
//                     }}
//                     exit={{
//                       opacity: 0,
//                       transition: { duration: 0.15 },
//                     }}
//                   >
//                     {sections.map((section) => (
//                       <li key={section.id}>
//                         <NavLink
//                           href={`${link.href}#${section.id}`}
//                           tag={section.tag}
//                           isAnchorLink
//                         >
//                           {section.title}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </motion.li>
//           ))}
//         </ul>
//       </div>
//     </li>
//   )
// }

export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        <div>
          {navigation.map((group, groupIndex) => {
            return (
              <div key={groupIndex} className="mt-6">
                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {group.title}
                </span>
                <ul role="list" className="border-l ml-2 border-transparent">
                  {group.links.map((item, itemIndex) => {
                    // Check if the item has nested links
                    if ('links' in item) {
                      return (
                        <li key={itemIndex}>
                          <span className="font-medium text-sm">{item.title}</span>
                          <ul className="ml-2">
                            {item.links.map((nestedItem, nestedIndex) => (
                              <li key={nestedIndex}>
                                <NavLink href={nestedItem.href}>
                                  {nestedItem.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li key={itemIndex}>
                          <NavLink href={item.href}>
                            {item.title}
                          </NavLink>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            );
          })}

        </div>
        {/* {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : ''}
          />
        ))} */}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
````

## File: src/components/Prose.tsx
````typescript
import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose dark:prose-invert',
        // `html :where(& > *)` is used to select all direct children without an increase in specificity like you'd get from just `& > *`
        '[html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl lg:[html_:where(&>*)]:mx-[calc(50%-min(50%,var(--container-lg)))] lg:[html_:where(&>*)]:max-w-3xl',
      )}
      {...props}
    />
  )
}
````

## File: src/components/Resources.tsx
````typescript
'use client'

import Link from 'next/link'
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

const resources: Array<Resource> = [
  {
    href: '/contacts',
    name: 'Contacts',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/conversations',
    name: 'Conversations',
    description:
      'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/messages',
    name: 'Messages',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/groups',
    name: 'Groups',
    description:
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

function ResourceIcon({ icon: Icon }: { icon: Resource['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-sky-300/10 dark:group-hover:ring-sky-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-sky-300/10 dark:group-hover:stroke-sky-400" />
    </div>
  )
}

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Resource['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#A7C6ED] to-[#E0F2FE] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#1B2831] dark:to-[#2C3533]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }: { resource: Resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-zinc-900/7.5 ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm/7 font-semibold text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
````

## File: src/components/Search.tsx
````typescript
'use client'
import {
  forwardRef,
  Fragment,
  Suspense,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Highlighter from 'react-highlight-words'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  type AutocompleteApi,
  type AutocompleteCollection,
  type AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import clsx from 'clsx'

import { INavLink, navigation } from '@/app/docs/_components/Navigation'
import { type Result } from '@/mdx/search.mjs'

type EmptyObject = Record<string, never>

type Autocomplete = AutocompleteApi<
  Result,
  React.SyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>

function useAutocomplete({ close }: { close: () => void }) {
  let id = useId()
  let router = useRouter()
  let [autocompleteState, setAutocompleteState] = useState<
    AutocompleteState<Result> | EmptyObject
  >({})

  function navigate({ itemUrl }: { itemUrl?: string }) {
    if (!itemUrl) {
      return
    }

    router.push(itemUrl)

    if (
      itemUrl ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  let [autocomplete] = useState<Autocomplete>(() =>
    createAutocomplete<
      Result,
      React.SyntheticEvent,
      React.MouseEvent,
      React.KeyboardEvent
    >({
      id,
      placeholder: 'Find something...',
      defaultActiveItemId: 0,
      onStateChange({ state }) {
        setAutocompleteState(state)
      },
      shouldPanelOpen({ state }) {
        return state.query !== ''
      },
      navigator: {
        navigate,
      },
      getSources({ query }) {
        return import('@/mdx/search.mjs').then(({ search }) => {
          return [
            {
              sourceId: 'documentation',
              getItems() {
                return search(query, { limit: 5 })
              },
              getItemUrl({ item }) {
                return item.url
              },
              onSelect: navigate,
            },
          ]
        })
      },
    }),
  )

  return { autocomplete, autocompleteState }
}

function SearchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
      />
    </svg>
  )
}

function NoResultsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
      />
    </svg>
  )
}

function LoadingIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="5.5" strokeLinejoin="round" />
      <path
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
      />
      <defs>
        <linearGradient
          id={id}
          x1="13"
          x2="9.5"
          y1="9"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function HighlightQuery({ text, query }: { text: string; query: string }) {
  return (
    <Highlighter
      highlightClassName="underline bg-transparent text-blue-500"
      searchWords={[query]}
      autoEscape={true}
      textToHighlight={text}
    />
  )
}

function isNavLink(link: INavLink | { title: string; links: INavLink[] }): link is INavLink {
  return 'href' in link;
}

function SearchResult({ result, resultIndex, autocomplete, collection, query }: { result: Result, resultIndex: number, autocomplete: Autocomplete, collection: AutocompleteCollection<Result>, query: string }) {
  let id = useId()

  let sectionTitle = navigation.find((section) =>
    section.links.some((link) => isNavLink(link) && link.href === result.url.split('#')[0]),
  )?.title;
  
  let hierarchy = [sectionTitle, result.pageTitle].filter(
    (x): x is string => typeof x === 'string',
  )

  return (
    <li
      className={clsx(
        'group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50',
        resultIndex > 0 && 'border-t border-zinc-100 dark:border-zinc-800',
      )}
      aria-labelledby={`${id}-hierarchy ${id}-title`}
      {...autocomplete.getItemProps({
        item: result,
        source: collection.source,
      })}
    >
      <div
        id={`${id}-title`}
        aria-hidden="true"
        className="text-sm font-medium text-zinc-900 group-aria-selected:text-blue-500 dark:text-white"
      >
        <HighlightQuery text={result.title} query={query} />
      </div>
      {hierarchy.length > 0 && (
        <div
          id={`${id}-hierarchy`}
          aria-hidden="true"
          className="mt-1 truncate text-2xs whitespace-nowrap text-zinc-500"
        >
          {hierarchy.map((item, itemIndex, items) => (
            <Fragment key={itemIndex}>
              <HighlightQuery text={item} query={query} />
              <span
                className={
                  itemIndex === items.length - 1
                    ? 'sr-only'
                    : 'mx-2 text-zinc-300 dark:text-zinc-700'
                }
              >
                /
              </span>
            </Fragment>
          ))}
        </div>
      )}
    </li>
  )
}

function SearchResults({
  autocomplete,
  query,
  collection,
}: {
  autocomplete: Autocomplete
  query: string
  collection: AutocompleteCollection<Result>
}) {
  if (collection.items.length === 0) {
    return (
      <div className="p-6 text-center">
        <NoResultsIcon className="mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600" />
        <p className="mt-2 text-xs text-zinc-700 dark:text-zinc-400">
          Nothing found for{' '}
          <strong className="font-semibold break-words text-zinc-900 dark:text-white">
            &lsquo;{query}&rsquo;
          </strong>
          . Please try again.
        </p>
      </div>
    )
  }

  return (
    <ul {...autocomplete.getListProps()}>
      {collection.items.map((result, resultIndex) => (
        <SearchResult
          key={result.url}
          result={result}
          resultIndex={resultIndex}
          autocomplete={autocomplete}
          collection={collection}
          query={query}
        />
      ))}
    </ul>
  )
}

const SearchInput = forwardRef<
  React.ElementRef<'input'>,
  {
    autocomplete: Autocomplete
    autocompleteState: AutocompleteState<Result> | EmptyObject
    onClose: () => void
  }
>(function SearchInput({ autocomplete, autocompleteState, onClose }, inputRef) {
  let inputProps = autocomplete.getInputProps({ inputElement: null })

  return (
    <div className="group relative flex h-12">
      <SearchIcon className="pointer-events-none absolute top-0 left-3 h-full w-5 stroke-zinc-500" />
      <input
        ref={inputRef}
        data-autofocus
        className={clsx(
          'flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-hidden placeholder:text-zinc-500 focus:w-full focus:flex-none sm:text-sm dark:text-white [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden',
          autocompleteState.status === 'stalled' ? 'pr-11' : 'pr-4',
        )}
        {...inputProps}
        onKeyDown={(event) => {
          if (
            event.key === 'Escape' &&
            !autocompleteState.isOpen &&
            autocompleteState.query === ''
          ) {
            // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
            // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
            if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur()
            }

            onClose()
          } else {
            inputProps.onKeyDown(event)
          }
        }}
      />
      {autocompleteState.status === 'stalled' && (
        <div className="absolute inset-y-0 right-3 flex items-center">
          <LoadingIcon className="h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-blue-400" />
        </div>
      )}
    </div>
  )
})

function SearchDialog({
  open,
  setOpen,
  className,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  className?: string
}) {
  let formRef = useRef<React.ElementRef<'form'>>(null)
  let panelRef = useRef<React.ElementRef<'div'>>(null)
  let inputRef = useRef<React.ElementRef<typeof SearchInput>>(null)
  let { autocomplete, autocompleteState } = useAutocomplete({
    close() {
      setOpen(false)
    },
  })
  let pathname = usePathname()
  let searchParams = useSearchParams()

  useEffect(() => {
    setOpen(false)
  }, [pathname, searchParams, setOpen])

  useEffect(() => {
    if (open) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, setOpen])

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
        autocomplete.setQuery('')
      }}
      className={clsx('fixed inset-0 z-50', className)}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-400/25 backdrop-blur-xs data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-black/40"
      />

      <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
        <DialogPanel
          transition
          className="mx-auto transform-gpu overflow-hidden rounded-lg bg-zinc-50 ring-1 shadow-xl ring-zinc-900/7.5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:max-w-xl dark:bg-zinc-900 dark:ring-zinc-800"
        >
          <div {...autocomplete.getRootProps({})}>
            <form
              ref={formRef}
              {...autocomplete.getFormProps({
                inputElement: inputRef.current,
              })}
            >
              <SearchInput
                ref={inputRef}
                autocomplete={autocomplete}
                autocompleteState={autocompleteState}
                onClose={() => setOpen(false)}
              />
              <div
                ref={panelRef}
                className="border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5"
                {...autocomplete.getPanelProps({})}
              >
                {autocompleteState.isOpen && (
                  <SearchResults
                    autocomplete={autocomplete}
                    query={autocompleteState.query}
                    collection={autocompleteState.collections[0]}
                  />
                )}
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

function useSearchProps() {
  let buttonRef = useRef<React.ElementRef<'button'>>(null)
  let [open, setOpen] = useState(false)

  return {
    buttonProps: {
      ref: buttonRef,
      onClick() {
        setOpen(true)
      },
    },
    dialogProps: {
      open,
      setOpen: useCallback(
        (open: boolean) => {
          let { width = 0, height = 0 } =
            buttonRef.current?.getBoundingClientRect() ?? {}
          if (!open || (width !== 0 && height !== 0)) {
            setOpen(open)
          }
        },
        [setOpen],
      ),
    },
  }
}

export function Search() {
  let [modifierKey, setModifierKey] = useState<string>()
  let { buttonProps, dialogProps } = useSearchProps()

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ',
    )
  }, [])

  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pr-3 pl-2 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-white/10 dark:ring-inset dark:hover:ring-white/20"
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-current" />
        Find something...
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      <Suspense fallback={null}>
        <SearchDialog className="hidden lg:block" {...dialogProps} />
      </Suspense>
    </div>
  )
}

export function MobileSearch() {
  let { buttonProps, dialogProps } = useSearchProps()

  return (
    <div className="contents lg:hidden">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 lg:hidden dark:hover:bg-white/5"
        aria-label="Find something..."
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-zinc-900 dark:stroke-white" />
      </button>
      <Suspense fallback={null}>
        <SearchDialog className="lg:hidden" {...dialogProps} />
      </Suspense>
    </div>
  )
}
````

## File: src/components/SectionProvider.tsx
````typescript
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { type StoreApi, createStore, useStore } from 'zustand'

import { remToPx } from '@/lib/remToPx'

export interface Section {
  id: string
  title: string
  offsetRem?: number
  tag?: string
  headingRef?: React.RefObject<HTMLHeadingElement>
}

interface SectionState {
  sections: Array<Section>
  visibleSections: Array<string>
  setVisibleSections: (visibleSections: Array<string>) => void
  registerHeading: ({
    id,
    ref,
    offsetRem,
  }: {
    id: string
    ref: React.RefObject<HTMLHeadingElement>
    offsetRem: number
  }) => void
}

function createSectionStore(sections: Array<Section>) {
  return createStore<SectionState>()((set) => ({
    sections,
    visibleSections: [],
    setVisibleSections: (visibleSections) =>
      set((state) =>
        state.visibleSections.join() === visibleSections.join()
          ? {}
          : { visibleSections },
      ),
    registerHeading: ({ id, ref, offsetRem }) =>
      set((state) => {
        return {
          sections: state.sections.map((section) => {
            if (section.id === id) {
              return {
                ...section,
                headingRef: ref,
                offsetRem,
              }
            }
            return section
          }),
        }
      }),
  }))
}

function useVisibleSections(sectionStore: StoreApi<SectionState>) {
  let setVisibleSections = useStore(sectionStore, (s) => s.setVisibleSections)
  let sections = useStore(sectionStore, (s) => s.sections)

  useEffect(() => {
    function checkVisibleSections() {
      let { innerHeight, scrollY } = window
      let newVisibleSections = []

      for (
        let sectionIndex = 0;
        sectionIndex < sections.length;
        sectionIndex++
      ) {
        let { id, headingRef, offsetRem = 0 } = sections[sectionIndex]

        if (!headingRef?.current) {
          continue
        }

        let offset = remToPx(offsetRem)
        let top = headingRef.current.getBoundingClientRect().top + scrollY

        if (sectionIndex === 0 && top - offset > scrollY) {
          newVisibleSections.push('_top')
        }

        let nextSection = sections[sectionIndex + 1]
        let bottom =
          (nextSection?.headingRef?.current?.getBoundingClientRect().top ??
            Infinity) +
          scrollY -
          remToPx(nextSection?.offsetRem ?? 0)

        if (
          (top > scrollY && top < scrollY + innerHeight) ||
          (bottom > scrollY && bottom < scrollY + innerHeight) ||
          (top <= scrollY && bottom >= scrollY + innerHeight)
        ) {
          newVisibleSections.push(id)
        }
      }

      setVisibleSections(newVisibleSections)
    }

    let raf = window.requestAnimationFrame(() => checkVisibleSections())
    window.addEventListener('scroll', checkVisibleSections, { passive: true })
    window.addEventListener('resize', checkVisibleSections)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', checkVisibleSections)
      window.removeEventListener('resize', checkVisibleSections)
    }
  }, [setVisibleSections, sections])
}

const SectionStoreContext = createContext<StoreApi<SectionState> | null>(null)

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export function SectionProvider({
  sections,
  children,
}: {
  sections: Array<Section>
  children: React.ReactNode
}) {
  let [sectionStore] = useState(() => createSectionStore(sections))

  useVisibleSections(sectionStore)

  useIsomorphicLayoutEffect(() => {
    sectionStore.setState({ sections })
  }, [sectionStore, sections])

  return (
    <SectionStoreContext.Provider value={sectionStore}>
      {children}
    </SectionStoreContext.Provider>
  )
}

export function useSectionStore<T>(selector: (state: SectionState) => T) {
  let store = useContext(SectionStoreContext)
  return useStore(store!, selector)
}
````

## File: src/components/table-of-contents.tsx
````typescript
// "use client";

// import { useEffect, useState } from "react";
// import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

// export type TOCEntry = {
//   level: number;
//   text: string;
//   slug: string;
//   children: TOCEntry[];
// };

// export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
//   let [activeSection, setActiveSection] = useState<string | null>(null);
//   useEffect(() => {
//     const root = document.querySelector('[data-content="true"]');
//     if (!root) return;

//     let elements = root.children;
//     let sections: Map<Element, string> = new Map();
//     let currentSectionId: string | null = null;
//     for (let element of elements) {
//       if (element.id && (element.tagName === "H2" || element.tagName === "H3")) currentSectionId = element.id;
//       if (!currentSectionId) continue;

//       sections.set(element, `#${currentSectionId}`);
//     }

//     let visibleElements = new Set<Element>();

//     const callback = (entries: IntersectionObserverEntry[]) => {
//       for (let entry of entries) {
//         if (entry.isIntersecting) {
//           visibleElements.add(entry.target);
//         } else {
//           visibleElements.delete(entry.target);
//         }
//       }

//       let firstVisibleSection = Array.from(sections.entries()).find(([element]) => visibleElements.has(element));
//       if (!firstVisibleSection) return;
//       setActiveSection(firstVisibleSection[1]);
//     };

//     const observer = new IntersectionObserver(callback, {
//       rootMargin: "-56px 0px",
//     });

//     Array.from(sections.keys()).forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <NavList>
//       <NavListHeading>On this page</NavListHeading>
//       <NavListItems data-toc="true">
//         {tableOfContents.map(({ text, slug, children }, i) => (
//           <NavListItem key={i}>
//             <NavListLink aria-current={activeSection === slug ? "location" : undefined} href={slug}>
//               {text}
//             </NavListLink>
//             {children.length > 0 && (
//               <NavListItems nested>
//                 {children.map(({ text, slug }, i) => (
//                   <NavListItem key={i}>
//                     <NavListLink nested aria-current={activeSection === slug ? "location" : undefined} href={slug}>
//                       {text}
//                     </NavListLink>
//                   </NavListItem>
//                 ))}
//               </NavListItems>
//             )}
//           </NavListItem>
//         ))}
//       </NavListItems>
//     </NavList>
//   );
// }
````

## File: src/components/Tag.tsx
````typescript
import clsx from 'clsx'

const variantStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
}

const colorStyles = {
  blue: {
    small: 'text-blue-500 dark:text-blue-400',
    medium:
      'ring-blue-300 dark:ring-blue-400/30 bg-blue-400/10 text-blue-500 dark:text-blue-400',
  },
  sky: {
    small: 'text-sky-500',
    medium:
      'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
  },
  amber: {
    small: 'text-amber-500',
    medium:
      'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',
  },
  rose: {
    small: 'text-red-500 dark:text-rose-500',
    medium:
      'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',
  },
  zinc: {
    small: 'text-zinc-400 dark:text-zinc-500',
    medium:
      'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
  },
}

const valueColorMap = {
  GET: 'sky',
  POST: 'sky',
  PUT: 'amber',
  DELETE: 'rose',
} as Record<string, keyof typeof colorStyles>

export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children] ?? 'sky',
}: {
  children: keyof typeof valueColorMap & (string | {})
  variant?: keyof typeof variantStyles
  color?: keyof typeof colorStyles
}) {
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem]/6 font-semibold',
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  )
}
````

## File: src/components/ThemeToggle.tsx
````typescript
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  )
}

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-5 w-5 stroke-zinc-900 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 stroke-white dark:block" />
    </button>
  )
}
````

## File: src/images/logos/go.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
  <g fill="#00ACD7" clip-path="url(#a)">
    <path fill-rule="evenodd"
      d="M5.8 19.334c-.08 0-.093-.054-.067-.107l.4-.533a.421.421 0 0 1 .227-.08h6.893c.08 0 .094.053.067.106l-.334.507c-.04.053-.133.12-.2.12L5.8 19.32v.014Zm-2.92 1.773c-.08 0-.093-.04-.053-.107l.4-.52c.04-.053.133-.093.213-.093h8.8c.093 0 .133.053.107.12l-.16.453c-.014.08-.094.134-.174.134H2.88v.013Zm4.68 1.773c-.08 0-.107-.053-.067-.12l.267-.48c.053-.053.133-.12.2-.12h3.866c.08 0 .12.067.12.134l-.04.466c0 .08-.08.134-.133.134L7.56 22.88Zm20.053-3.906-3.24.853c-.293.08-.32.093-.56-.2-.293-.32-.506-.533-.92-.733a3.36 3.36 0 0 0-3.493.293 4.107 4.107 0 0 0-1.973 3.667 3.027 3.027 0 0 0 2.613 3.04c1.306.173 2.413-.294 3.28-1.28l.533-.707H20.12c-.4 0-.507-.267-.373-.587.253-.6.72-1.6.986-2.106a.533.533 0 0 1 .48-.307h7.04c-.04.533-.04 1.04-.12 1.573-.213 1.387-.733 2.667-1.586 3.787a8.053 8.053 0 0 1-5.507 3.28 6.839 6.839 0 0 1-5.2-1.28A6.065 6.065 0 0 1 13.386 24c-.24-2.106.374-4 1.654-5.666A8.573 8.573 0 0 1 20.44 15a6.667 6.667 0 0 1 5.12.934c1.027.666 1.76 1.6 2.253 2.733.107.173.027.267-.2.32v-.013Z"
      clip-rule="evenodd" />
    <path
      d="M34 29.667a7.253 7.253 0 0 1-4.707-1.707 6.066 6.066 0 0 1-2.08-3.733 7.373 7.373 0 0 1 1.56-5.827 8.107 8.107 0 0 1 5.413-3.226 7.173 7.173 0 0 1 5.507.986 6.015 6.015 0 0 1 2.72 4.307 7.467 7.467 0 0 1-2.227 6.547 8.854 8.854 0 0 1-4.626 2.48c-.534.093-1.054.106-1.547.173H34Zm4.613-7.813c-.027-.254-.027-.44-.067-.64a3.186 3.186 0 0 0-3.933-2.547 4.227 4.227 0 0 0-3.387 3.36A3.187 3.187 0 0 0 33 25.68c1.066.454 2.133.4 3.16-.133a4.227 4.227 0 0 0 2.453-3.68v-.013Z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M4 4h40v40H4z" />
    </clipPath>
  </defs>
</svg>
````

## File: src/images/logos/node.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
  <path fill="#89D42C"
    d="M23.675 39.82a2.48 2.48 0 0 1-1.19-.313l-3.764-2.236c-.568-.31-.285-.425-.114-.48.765-.256.906-.313 1.698-.765.086-.057.198-.029.284.028l2.888 1.727c.113.057.254.057.34 0l11.296-6.54c.113-.057.17-.17.17-.312v-13.05c0-.143-.057-.256-.17-.313l-11.296-6.51c-.114-.057-.256-.057-.34 0L12.18 17.567c-.114.057-.17.198-.17.311V30.93c0 .114.056.255.17.312l3.087 1.784c1.67.849 2.717-.143 2.717-1.133V19.01a.344.344 0 0 1 .34-.34h1.443a.344.344 0 0 1 .341.34v12.882c0 2.237-1.218 3.539-3.342 3.539-.65 0-1.16 0-2.604-.708l-2.975-1.698A2.39 2.39 0 0 1 10 30.959V17.904c0-.849.452-1.642 1.189-2.066l11.296-6.54a2.527 2.527 0 0 1 2.379 0l11.297 6.54a2.39 2.39 0 0 1 1.188 2.066V30.96c0 .85-.452 1.642-1.188 2.066l-11.297 6.54a2.896 2.896 0 0 1-1.189.256v-.001Zm3.482-8.976c-4.954 0-5.973-2.264-5.973-4.19a.344.344 0 0 1 .34-.34h1.472c.169 0 .311.114.311.284.226 1.5.878 2.236 3.879 2.236 2.378 0 3.397-.538 3.397-1.812 0-.736-.283-1.274-3.992-1.642-3.086-.311-5.012-.99-5.012-3.454 0-2.293 1.926-3.652 5.154-3.652 3.623 0 5.407 1.246 5.634 3.963a.459.459 0 0 1-.086.256c-.056.056-.141.113-.226.113h-1.472a.332.332 0 0 1-.311-.256c-.34-1.555-1.217-2.066-3.539-2.066-2.605 0-2.916.906-2.916 1.585 0 .821.368 1.076 3.878 1.53 3.483.452 5.124 1.104 5.124 3.539-.027 2.491-2.066 3.907-5.662 3.907Z" />
</svg>
````

## File: src/images/logos/php.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
  <path fill="#6181B6" fill-rule="evenodd"
    d="M14.643 21.762h-1.77l-.964 4.965h1.57c1.043 0 1.82-.198 2.33-.59.51-.393.853-1.047 1.03-1.966.173-.882.095-1.503-.232-1.866-.328-.362-.98-.543-1.962-.543h-.002Z"
    clip-rule="evenodd" />
  <path fill="#6181B6"
    d="M24 13.29c-12.426 0-22.5 5.3-22.5 11.835 0 6.535 10.074 11.837 22.5 11.837s22.5-5.3 22.5-11.837S36.426 13.29 24 13.29Zm-6.113 13.971a4.55 4.55 0 0 1-1.718 1.032c-.63.203-1.434.308-2.41.308h-2.215l-.612 3.152H8.346l2.307-11.861h4.968c1.494 0 2.585.391 3.27 1.177.687.785.893 1.88.618 3.285a5.34 5.34 0 0 1-.57 1.588c-.28.493-.634.938-1.053 1.319h.002Zm7.546 1.34 1.018-5.247c.119-.598.073-1.005-.128-1.221-.2-.218-.63-.328-1.288-.328h-2.047l-1.32 6.799h-2.566L21.41 16.74h2.561l-.611 3.155h2.282c1.439 0 2.429.25 2.975.75.546.499.708 1.314.492 2.437l-1.073 5.52h-2.604V28.6Zm14.243-4.245a5.215 5.215 0 0 1-.571 1.586 5.356 5.356 0 0 1-1.051 1.319c-.49.467-1.078.82-1.721 1.032-.63.203-1.434.308-2.41.308H31.71l-.614 3.154h-2.581l2.305-11.862h4.968c1.495 0 2.584.393 3.27 1.177.686.784.895 1.878.62 3.285h-.002Z" />
  <path fill="#6181B6" fill-rule="evenodd"
    d="M34.81 21.762h-1.765l-.968 4.965h1.571c1.044 0 1.821-.198 2.33-.59.51-.393.852-1.047 1.032-1.966.172-.882.093-1.503-.234-1.866-.326-.362-.983-.543-1.964-.543h-.002Z"
    clip-rule="evenodd" />
</svg>
````

## File: src/images/logos/python.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
  <g clip-path="url(#a)">
    <path fill="#3372A7"
      d="M23.429 9.008c-7.882 0-7.39 3.418-7.39 3.418l.01 3.541h7.52v1.063H13.062s-5.043-.572-5.043 7.38c0 7.954 4.402 7.671 4.402 7.671h2.627v-3.69s-.142-4.402 4.331-4.402h7.46s4.191.068 4.191-4.05v-6.81s.637-4.12-7.6-4.12Zm-4.147 2.382a1.353 1.353 0 1 1 .001 2.706 1.353 1.353 0 0 1-.001-2.706Z" />
    <path fill="#FFD235"
      d="M23.653 39.894c7.881 0 7.39-3.418 7.39-3.418l-.01-3.541h-7.52v-1.063H34.02s5.043.572 5.043-7.381-4.402-7.67-4.402-7.67h-2.627v3.69s.142 4.402-4.332 4.402h-7.46s-4.19-.068-4.19 4.05v6.81s-.637 4.12 7.6 4.12Zm4.147-2.381a1.353 1.353 0 1 1-.002-2.707 1.353 1.353 0 0 1 .002 2.706Z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M8 9h31.122v31H8z" />
    </clipPath>
  </defs>
</svg>
````

## File: src/images/logos/ruby.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
  <path fill="#D91505"
    d="M33.735 10.41c3.376.585 4.334 2.893 4.262 5.311l.017-.035-1.519 19.912-19.752 1.352h.017c-1.639-.069-5.294-.218-5.46-5.328l1.83-3.34 3.139 7.331.56 1.306L19.95 26.74l-.032.007.017-.034 10.302 3.29-1.555-6.044-1.101-4.341 9.817-.634-.684-.567-7.048-5.746 4.073-2.272-.004.012v-.001ZM17.01 15.966c3.963-3.932 9.079-6.256 11.044-4.274 1.96 1.98-.118 6.796-4.089 10.726-3.966 3.931-9.02 6.382-10.98 4.405-1.967-1.98.05-6.921 4.02-10.853l.005-.004Z" />
</svg>
````

## File: src/lib/api.ts
````typescript
// import type { TOCEntry } from "@/components/table-of-contents";
// import fs from "node:fs/promises";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import React from "react";
// import index from "./index";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export async function getDocPageBySlug(
//   slug: string,
// ): Promise<null | { Component: React.FC; title: string; description: string }> {
//   try {
//     // Check if the file exists
//     if (!(await fs.stat(path.join(process.cwd(), "./src/docs", `${slug}.mdx`)).catch(() => false))) {
//       return null;
//     }

//     let module = await import(`../../../docs/${slug}.mdx`);
//     if (!module.default) {
//       return null;
//     }

//     return {
//       Component: module.default,
//       title: module.title,
//       description: module.description,
//     };
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// }

// export async function getDocPageSlugs() {
//   let slugs = [];
//   for (let file of await fs.readdir(path.join(__dirname, "../../../docs"))) {
//     if (!file.endsWith(".mdx")) continue;
//     slugs.push(path.parse(file).name);
//   }
//   return slugs;
// }

// export async function generateTableOfContents(slug: string) {
//   // Check if the file exists
//   if (!(await fs.stat(path.join(process.cwd(), "./src/docs", `${slug}.mdx`)).catch(() => false))) {
//     return [];
//   }

//   let markdown = await fs.readFile(path.join(process.cwd(), "./src/docs", `${slug}.mdx`), "utf8");

//   return generateTableOfContentsFromMarkdown(markdown);
// }

// export async function generateTableOfContentsFromMarkdown(markdown: string) {
//   let headings = [
//     // Match Markdown and HTML headings (e.g., ## Heading, <h2>Heading</h2>)
//     ...markdown.matchAll(/^(#+)\s+(.+)$|^<h([1-6])(?:\s+[^>]*\bid=["'](.*?)["'][^>]*)?>(.*?)<\/h\3>/gm),
//   ].map((match) => {
//     let level;
//     let text;
//     let slug;

//     if (match[1]) {
//       // Markdown headings
//       level = match[1].length;
//       text = match[2].trim().replaceAll("\\", "");
//     } else {
//       // HTML headings
//       level = parseInt(match[3], 10); // Extract level from <hN>
//       text = match[5].trim().replaceAll("\\", "");
//       if (match[4]) {
//         slug = `#${match[4]}`;
//       }
//     }

//     // Generate slug
//     slug ??= `#${text
//       .replace(/`([^`]+)`/g, "$1") // Remove inline code formatting
//       .replace(/[^\w\s-]/g, "") // Remove special characters
//       .trim()
//       .replace(/\s+/g, "-") // Replace spaces with hyphens
//       .toLowerCase()}`;

//     return { level, text, slug, children: [] };
//   });

//   let toc: TOCEntry[] = [];
//   let stack: TOCEntry[] = [{ level: 0, text: "", slug: "", children: toc }];

//   let containsQuickReference = markdown.match(/\<ApiTable\s+rows=\{\[/);
//   if (containsQuickReference) {
//     toc.push({
//       level: 0,
//       text: "Quick reference",
//       slug: "#quick-reference",
//       children: [],
//     });
//   }

//   for (let heading of headings) {
//     while (stack[stack.length - 1].level >= heading.level) stack.pop();
//     stack[stack.length - 1].children.push(heading);
//     stack.push(heading);
//   }

//   return toc;
// }

// export function getSectionAndTitleBySlug(slug: string): { section: string; title: string } | null {
//   let currentPath = `/docs/${slug}`;
//   for (let [section, entries] of Object.entries(navigationData)) {
//     for (let [title, path, children] of entries) {
//       if (path === currentPath) {
//         return { section, title };
//       }

//       if (Array.isArray(children)) {
//         for (let [childTitle, childPath] of children) {
//           if (childPath === currentPath) {
//             return { section, title: childTitle };
//           }
//         }
//       }
//     }
//   }
//   return null;
// }
````

## File: src/lib/remToPx.ts
````typescript
export function remToPx(remValue: number) {
  let rootFontSize =
    typeof window === 'undefined'
      ? 16
      : parseFloat(window.getComputedStyle(document.documentElement).fontSize)

  return remValue * rootFontSize
}
````

## File: src/mdx/recma.mjs
````
import { mdxAnnotations } from 'mdx-annotations'

export const recmaPlugins = [mdxAnnotations.recma]
````

## File: src/mdx/rehype.mjs
````
import { slugifyWithCounter } from '@sindresorhus/slugify'
import * as acorn from 'acorn'
import { toString } from 'mdast-util-to-string'
import { mdxAnnotations } from 'mdx-annotations'
import shiki from 'shiki'
import { visit } from 'unist-util-visit'

function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code') {
        parentNode.properties.language = node.properties.className
          ? node.properties?.className[0]?.replace(/^language-/, '')
          : 'txt'
      }
    })
  }
}

let highlighter

function rehypeShiki() {
  return async (tree) => {
    highlighter =
      highlighter ?? (await shiki.getHighlighter({ theme: 'css-variables' }))

    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        let codeNode = node.children[0]
        let textNode = codeNode.children[0]

        node.properties.code = textNode.value

        if (node.properties.language) {
          let tokens = highlighter.codeToThemedTokens(
            textNode.value,
            node.properties.language,
          )

          textNode.value = shiki.renderToHtml(tokens, {
            elements: {
              pre: ({ children }) => children,
              code: ({ children }) => children,
              line: ({ children }) => `<span>${children}</span>`,
            },
          })
        }
      }
    })
  }
}

function rehypeSlugify() {
  return (tree) => {
    let slugify = slugifyWithCounter()
    visit(tree, 'element', (node) => {
      if (node.tagName === 'h2' && !node.properties.id) {
        node.properties.id = slugify(toString(node))
      }
    })
  }
}

function rehypeAddMDXExports(getExports) {
  return (tree) => {
    let exports = Object.entries(getExports(tree))

    for (let [name, value] of exports) {
      for (let node of tree.children) {
        if (
          node.type === 'mdxjsEsm' &&
          new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
        ) {
          return
        }
      }

      let exportStr = `export const ${name} = ${value}`

      tree.children.push({
        type: 'mdxjsEsm',
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          }),
        },
      })
    }
  }
}

function getSections(node) {
  let sections = []

  for (let child of node.children ?? []) {
    if (child.type === 'element' && child.tagName === 'h2') {
      sections.push(`{
        title: ${JSON.stringify(toString(child))},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`)
    } else if (child.children) {
      sections.push(...getSections(child))
    }
  }

  return sections
}

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeParseCodeBlocks,
  rehypeShiki,
  rehypeSlugify,
  [
    rehypeAddMDXExports,
    (tree) => ({
      sections: `[${getSections(tree).join()}]`,
    }),
  ],
]
````

## File: src/mdx/remark.mjs
````
import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm]
````

## File: src/mdx/search.mjs
````
import { slugifyWithCounter } from '@sindresorhus/slugify'
import glob from 'fast-glob'
import * as fs from 'fs'
import { toString } from 'mdast-util-to-string'
import * as path from 'path'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import { createLoader } from 'simple-functional-loader'
import { filter } from 'unist-util-filter'
import { SKIP, visit } from 'unist-util-visit'
import * as url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const processor = remark().use(remarkMdx).use(extractSections)
const slugify = slugifyWithCounter()

function isObjectExpression(node) {
  return (
    node.type === 'mdxTextExpression' &&
    node.data?.estree?.body?.[0]?.expression?.type === 'ObjectExpression'
  )
}

function excludeObjectExpressions(tree) {
  return filter(tree, (node) => !isObjectExpression(node))
}

function extractSections() {
  return (tree, { sections }) => {
    slugify.reset()

    visit(tree, (node) => {
      if (node.type === 'heading' || node.type === 'paragraph') {
        let content = toString(excludeObjectExpressions(node))
        if (node.type === 'heading' && node.depth <= 2) {
          let hash = node.depth === 1 ? null : slugify(content)
          sections.push([content, hash, []])
        } else {
          sections.at(-1)?.[2].push(content)
        }
        return SKIP
      }
    })
  }
}

export default function Search(nextConfig = {}) {
  let cache = new Map()

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: __filename,
        use: [
          createLoader(function () {
            let appDir = path.resolve('./src/app')
            this.addContextDependency(appDir)

            let files = glob.sync('**/*.mdx', { cwd: appDir })
            let data = files.map((file) => {
              let url = '/' + file.replace(/(^|\/)page\.mdx$/, '')
              let mdx = fs.readFileSync(path.join(appDir, file), 'utf8')

              let sections = []

              if (cache.get(file)?.[0] === mdx) {
                sections = cache.get(file)[1]
              } else {
                let vfile = { value: mdx, sections }
                processor.runSync(processor.parse(vfile), vfile)
                cache.set(file, [mdx, sections])
              }

              return { url, sections }
            })

            // When this file is imported within the application
            // the following module is loaded:
            return `
              import FlexSearch from 'flexsearch'

              let sectionIndex = new FlexSearch.Document({
                tokenize: 'full',
                document: {
                  id: 'url',
                  index: 'content',
                  store: ['title', 'pageTitle'],
                },
                context: {
                  resolution: 9,
                  depth: 2,
                  bidirectional: true
                }
              })

              let data = ${JSON.stringify(data)}

              for (let { url, sections } of data) {
                for (let [title, hash, content] of sections) {
                  sectionIndex.add({
                    url: url + (hash ? ('#' + hash) : ''),
                    title,
                    content: [title, ...content].join('\\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                  })
                }
              }

              export function search(query, options = {}) {
                let result = sectionIndex.search(query, {
                  ...options,
                  enrich: true,
                })
                if (result.length === 0) {
                  return []
                }
                return result[0].result.map((item) => ({
                  url: item.id,
                  title: item.doc.title,
                  pageTitle: item.doc.pageTitle,
                }))
              }
            `
          }),
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
````

## File: src/styles/0-vendor/_tailwind.scss
````scss
// ==========================================================================
// # Vendor: TailwindCSS
// ==========================================================================
@use 'tailwindcss';

@plugin '@tailwindcss/typography';
@config '../../typography.ts';
````

## File: src/styles/2-base/_base.scss
````scss
// ==========================================================================
// # Base: Base
// ==========================================================================

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  
}

@layer base {
  :root {
    --shiki-color-text: var(--color-white);
    --shiki-token-constant: var(--color-blue-300);
    --shiki-token-string: var(--color-blue-300);
    --shiki-token-comment: var(--color-zinc-500);
    --shiki-token-keyword: var(--color-sky-300);
    --shiki-token-parameter: var(--color-pink-300);
    --shiki-token-function: var(--color-violet-300);
    --shiki-token-string-expression: var(--color-blue-300);
    --shiki-token-punctuation: var(--color-zinc-200);
  }

  [inert] ::-webkit-scrollbar {
    display: none;
  }
}
````

## File: src/styles/2-base/_scrollbars.scss
````scss
// ==========================================================================
// # Base: Scrollbars
// ==========================================================================
//
//  Table of Content
//
//  - Page
//  - Other
//
//

// Page Scrollbar
// ============================================================

body {
  &::-webkit-scrollbar {
    width: 7px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ececec;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #ffffff;
  }
  &::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

// Page Scrollbar
// ============================================================

.scrollbar-main {
  &::-webkit-scrollbar {
    width: 7px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #7c7c7c;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ececec;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #ffffff;
  }
  &::-webkit-scrollbar-track {
    background: #474747;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
````

## File: src/styles/3-theming/_root.scss
````scss
// ==========================================================================
// # Theming: Root
// ==========================================================================
````

## File: src/styles/_cheat.scss
````scss
// ==========================================================================
// # Cheat - hotfixes
// =========================================================================
````

## File: src/styles/styles.scss
````scss
// ==========================================================================
// # Main.scss - Order in this file matters
// ==========================================================================

// ==========================================================================
// 0-lib
// ==========================================================================
@use "0-vendor/_tailwind";

// ==========================================================================
// 1-helpers
// ==========================================================================

// ==========================================================================
// 2-base
// ==========================================================================
@use "2-base/_base";
@use "2-base/_scrollbars";

// ==========================================================================
// 3-theming
// ==========================================================================
@use "3-theming/_root";

// ==========================================================================
// Hotfix - cheat
// ==========================================================================
@use "_cheat";
````

## File: .eslintrc.json
````json
{
  "extends": "next/core-web-vitals"
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: CHANGELOG.md
````markdown
# Changelog

## 2025-01-23

- Update template to Tailwind CSS v4.0

## 2024-11-01

- Fix code block rendering when no snippet language is specified ([#1643](https://github.com/tailwindlabs/tailwindui-issues/issues/1643))

## 2024-08-08

- Configure experimental `outputFileTracingIncludes` for hosting on Vercel

## 2024-06-21

- Bump Headless UI dependency to v2.1
- Update to new data-attribute-based transition API

## 2024-06-18

- Update `prettier` and `prettier-plugin-tailwindcss` dependencies

## 2024-05-31

- Fix `npm audit` warnings

## 2024-05-07

- Bump Headless UI dependency to v2.0

## 2024-01-17

- Fix `sharp` dependency issues ([#1549](https://github.com/tailwindlabs/tailwindui-issues/issues/1549))

## 2024-01-16

- Replace Twitter with X

## 2024-01-10

- Update Tailwind CSS, Next.js, Prettier, TypeScript, ESLint, and other dependencies
- Update Tailwind `darkMode` setting to new `selector` option
- Fix `not-prose` typography alignment issues
- Add name to MDX search function
- Sort classes

## 2023-10-03

- Add missing `@types/mdx` dependency ([#1512](https://github.com/tailwindlabs/tailwindui-issues/issues/1512))

## 2023-09-07

- Added TypeScript version of template

## 2023-08-15

- Bump Next.js dependency

## 2023-07-31

- Port template to Next.js app router

## 2023-07-24

- Fix search rendering bug in Safari ([#1470](https://github.com/tailwindlabs/tailwindui-issues/issues/1470))

## 2023-07-18

- Add 404 page
- Sort imports and other formatting

## 2023-05-16

- Bump Next.js dependency

## 2023-05-15

- Replace Algolia DocSearch with basic built-in search ([#1395](https://github.com/tailwindlabs/tailwindui-issues/issues/1395))

## 2023-04-11

- Bump Next.js dependency

## 2023-03-29

- Bump Tailwind CSS and Prettier dependencies
- Sort classes

## 2023-03-22

- Bump Headless UI dependency

## 2023-02-15

- Fix scroll restoration bug ([#1387](https://github.com/tailwindlabs/tailwindui-issues/issues/1387))

## 2023-02-02

- Bump Headless UI dependency

## 2023-01-16

- Fixes yarn compatibility ([#1403](https://github.com/tailwindlabs/tailwindui-issues/issues/1403))
- Bump `zustand` dependency

## 2023-01-07

- Enable markdown table support in using `remark-gfm` plugin ([#1398](https://github.com/tailwindlabs/tailwindui-issues/issues/1398))
- Fix SVG attribute casing ([#1402](https://github.com/tailwindlabs/tailwindui-issues/issues/1402))

## 2023-01-03

- Fix header disappearing in Safari ([#1392](https://github.com/tailwindlabs/tailwindui-issues/issues/1392))

## 2022-12-17

- Bump `mdx-annotations` dependency

## 2022-12-16

- Fix scroll jumping issue with Dialog in Safari ([#1387](https://github.com/tailwindlabs/tailwindui-issues/issues/1387))
- Update "API" item in header navigation link to home page
- Bump Headless UI dependency

## 2022-12-15

- Initial release
````

## File: LICENSE.md
````markdown
# Tailwind UI License

## Personal License

Tailwind Labs Inc. grants you an on-going, non-exclusive license to use the Components and Templates.

The license grants permission to **one individual** (the Licensee) to access and use the Components and Templates.

You **can**:

- Use the Components and Templates to create unlimited End Products.
- Modify the Components and Templates to create derivative components and templates. Those components and templates are subject to this license.
- Use the Components and Templates to create unlimited End Products for unlimited Clients.
- Use the Components and Templates to create End Products where the End Product is sold to End Users.
- Use the Components and Templates to create End Products that are open source and freely available to End Users.

You **cannot**:

- Use the Components and Templates to create End Products that are designed to allow an End User to build their own End Products using the Components and Templates or derivatives of the Components and Templates.
- Re-distribute the Components and Templates or derivatives of the Components and Templates separately from an End Product, neither in code or as design assets.
- Share your access to the Components and Templates with any other individuals.
- Use the Components and Templates to produce anything that may be deemed by Tailwind Labs Inc, in their sole and absolute discretion, to be competitive or in conflict with the business of Tailwind Labs Inc.

### Example usage

Examples of usage **allowed** by the license:

- Creating a personal website by yourself.
- Creating a website or web application for a client that will be owned by that client.
- Creating a commercial SaaS application (like an invoicing app for example) where end users have to pay a fee to use the application.
- Creating a commercial self-hosted web application that is sold to end users for a one-time fee.
- Creating a web application where the primary purpose is clearly not to simply re-distribute the components (like a conference organization app that uses the components for its UI for example) that is free and open source, where the source code is publicly available.

Examples of usage **not allowed** by the license:

- Creating a repository of your favorite Tailwind UI components or templates (or derivatives based on Tailwind UI components or templates) and publishing it publicly.
- Creating a React or Vue version of Tailwind UI and making it available either for sale or for free.
- Create a Figma or Sketch UI kit based on the Tailwind UI component designs.
- Creating a "website builder" project where end users can build their own websites using components or templates included with or derived from Tailwind UI.
- Creating a theme, template, or project starter kit using the components or templates and making it available either for sale or for free.
- Creating an admin panel tool (like [Laravel Nova](https://nova.laravel.com/) or [ActiveAdmin](https://activeadmin.info/)) that is made available either for sale or for free.

In simple terms, use Tailwind UI for anything you like as long as it doesn't compete with Tailwind UI.

### Personal License Definitions

Licensee is the individual who has purchased a Personal License.

Components and Templates are the source code and design assets made available to the Licensee after purchasing a Tailwind UI license.

End Product is any artifact produced that incorporates the Components or Templates or derivatives of the Components or Templates.

End User is a user of an End Product.

Client is an individual or entity receiving custom professional services directly from the Licensee, produced specifically for that individual or entity. Customers of software-as-a-service products are not considered clients for the purpose of this document.

## Team License

Tailwind Labs Inc. grants you an on-going, non-exclusive license to use the Components and Templates.

The license grants permission for **up to 25 Employees and Contractors of the Licensee** to access and use the Components and Templates.

You **can**:

- Use the Components and Templates to create unlimited End Products.
- Modify the Components and Templates to create derivative components and templates. Those components and templates are subject to this license.
- Use the Components and Templates to create unlimited End Products for unlimited Clients.
- Use the Components and Templates to create End Products where the End Product is sold to End Users.
- Use the Components and Templates to create End Products that are open source and freely available to End Users.

You **cannot**:

- Use the Components or Templates to create End Products that are designed to allow an End User to build their own End Products using the Components or Templates or derivatives of the Components or Templates.
- Re-distribute the Components or Templates or derivatives of the Components or Templates separately from an End Product.
- Use the Components or Templates to create End Products that are the property of any individual or entity other than the Licensee or Clients of the Licensee.
- Use the Components or Templates to produce anything that may be deemed by Tailwind Labs Inc, in their sole and absolute discretion, to be competitive or in conflict with the business of Tailwind Labs Inc.

### Example usage

Examples of usage **allowed** by the license:

- Creating a website for your company.
- Creating a website or web application for a client that will be owned by that client.
- Creating a commercial SaaS application (like an invoicing app for example) where end users have to pay a fee to use the application.
- Creating a commercial self-hosted web application that is sold to end users for a one-time fee.
- Creating a web application where the primary purpose is clearly not to simply re-distribute the components or templates (like a conference organization app that uses the components or a template for its UI for example) that is free and open source, where the source code is publicly available.

Examples of use **not allowed** by the license:

- Creating a repository of your favorite Tailwind UI components or template (or derivatives based on Tailwind UI components or templates) and publishing it publicly.
- Creating a React or Vue version of Tailwind UI and making it available either for sale or for free.
- Creating a "website builder" project where end users can build their own websites using components or templates included with or derived from Tailwind UI.
- Creating a theme or template using the components or templates and making it available either for sale or for free.
- Creating an admin panel tool (like [Laravel Nova](https://nova.laravel.com/) or [ActiveAdmin](https://activeadmin.info/)) that is made available either for sale or for free.
- Creating any End Product that is not the sole property of either your company or a client of your company. For example your employees/contractors can't use your company Tailwind UI license to build their own websites or side projects.

### Team License Definitions

Licensee is the business entity who has purchased a Team License.

Components and Templates are the source code and design assets made available to the Licensee after purchasing a Tailwind UI license.

End Product is any artifact produced that incorporates the Components or Templates or derivatives of the Components or Templates.

End User is a user of an End Product.

Employee is a full-time or part-time employee of the Licensee.

Contractor is an individual or business entity contracted to perform services for the Licensee.

Client is an individual or entity receiving custom professional services directly from the Licensee, produced specifically for that individual or entity. Customers of software-as-a-service products are not considered clients for the purpose of this document.

## Enforcement

If you are found to be in violation of the license, access to your Tailwind UI account will be terminated, and a refund may be issued at our discretion. When license violation is blatant and malicious (such as intentionally redistributing the Components or Templates through private warez channels), no refund will be issued.

The copyright of the Components and Templates is owned by Tailwind Labs Inc. You are granted only the permissions described in this license; all other rights are reserved. Tailwind Labs Inc. reserves the right to pursue legal remedies for any unauthorized use of the Components or Templates outside the scope of this license.

## Liability

Tailwind Labs Inc.’s liability to you for costs, damages, or other losses arising from your use of the Components or Templates — including third-party claims against you — is limited to a refund of your license fee. Tailwind Labs Inc. may not be held liable for any consequential damages related to your use of the Components or Templates.

This Agreement is governed by the laws of the Province of Ontario and the applicable laws of Canada. Legal proceedings related to this Agreement may only be brought in the courts of Ontario. You agree to service of process at the e-mail address on your original order.

## Questions?

Unsure which license you need, or unsure if your use case is covered by our licenses?

Email us at [support@tailwindui.com](mailto:support@tailwindui.com) with your questions.
````

## File: mdx-components.tsx
````typescript
import { type MDXComponents } from 'mdx/types'

import * as mdxComponents from '@/components/mdx'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...mdxComponents,
  }
}
````

## File: next.config.mjs
````
import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./src/app/**/*.mdx'],
    },
  },
}

export default withSearch(withMDX(nextConfig))
````

## File: package.json
````json
{
  "name": "lua-docs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "browserslist": "defaults, not ie <= 11",
  "dependencies": {
    "@algolia/autocomplete-core": "^1.7.3",
    "@headlessui/react": "^2.1.0",
    "@mdx-js/loader": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    "@next/mdx": "^14.0.4",
    "@next/third-parties": "^15.1.6",
    "@sindresorhus/slugify": "^2.1.1",
    "@tailwindcss/postcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.10",
    "@types/mdx": "^2.0.8",
    "@types/node": "^20.10.8",
    "@types/react": "^18.2.47",
    "@types/react-dom": "^18.2.18",
    "@types/react-highlight-words": "^0.16.4",
    "acorn": "^8.8.1",
    "clsx": "^2.1.0",
    "fast-glob": "^3.3.0",
    "flexsearch": "^0.7.31",
    "framer-motion": "^10.18.0",
    "mdast-util-to-string": "^4.0.0",
    "mdx-annotations": "^0.1.1",
    "next": "^14.0.4",
    "next-themes": "^0.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-highlight-words": "^0.20.0",
    "remark": "^15.0.1",
    "remark-gfm": "^4.0.0",
    "remark-mdx": "^3.0.0",
    "sass": "^1.83.4",
    "shiki": "^0.14.7",
    "simple-functional-loader": "^1.2.1",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.3.3",
    "unist-util-filter": "^5.0.1",
    "unist-util-visit": "^5.0.0",
    "zustand": "^4.3.2"
  },
  "devDependencies": {
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.4",
    "prettier": "^3.3.2",
    "prettier-plugin-tailwindcss": "^0.6.10",
    "sharp": "0.33.1"
  }
}
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
````

## File: prettier.config.js
````javascript
/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
````

## File: README.md
````markdown
# Welcome to Lua Web Docs

**[Lua Web Docs](https://luadocs.com)** is an open-source, collaborative project focused on creating clear and comprehensive documentation for Lua. It features detailed reference materials that are easy to understand and include practical examples.

## Mission

The mission of **[Lua Web Docs](https://luadocs.com)** is to provide a better reference guide for developers. We aim to address the shortcomings of the current official documentation, such as unclear explanations or the lack of examples, by delivering resources that are both practical and user-friendly.

## Getting Started

Follow these steps to set up the project locally:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open the website:**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Contributing

Contributions are welcome. Whether it's fixing a typo, adding examples, or improving explanations, any input that enhances the documentation is appreciated.  

Check the repository's contribution guidelines for details on how to get involved.

## Join Discord

Discord Invite Link: https://discord.gg/Jp2HFx3KTH  
GitHub Lua Discussion: https://github.com/AurelianSpodarec/LuaDocs/discussions
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: types.d.ts
````typescript
import { type SearchOptions } from 'flexsearch'

declare module '@/mdx/search.mjs' {
  export type Result = {
    url: string
    title: string
    pageTitle?: string
  }

  export function search(query: string, options?: SearchOptions): Array<Result>
}
````

## File: typography.ts
````typescript
import { type Config } from 'tailwindcss'

export default {
  theme: {
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.700'),
          '--tw-prose-headings': theme('colors.zinc.900'),
          '--tw-prose-links': theme('colors.sky.500'),
          '--tw-prose-links-hover': theme('colors.sky.600'),
          '--tw-prose-links-underline': theme('colors.sky.500 / 0.3'),
          '--tw-prose-bold': theme('colors.zinc.900'),
          '--tw-prose-counters': theme('colors.zinc.500'),
          '--tw-prose-bullets': theme('colors.zinc.300'),
          '--tw-prose-hr': theme('colors.zinc.900 / 0.05'),
          '--tw-prose-quotes': theme('colors.zinc.900'),
          '--tw-prose-quote-borders': theme('colors.zinc.200'),
          '--tw-prose-captions': theme('colors.zinc.500'),
          '--tw-prose-code': theme('colors.zinc.900'),
          '--tw-prose-code-bg': theme('colors.zinc.100'),
          '--tw-prose-code-ring': theme('colors.zinc.300'),
          '--tw-prose-th-borders': theme('colors.zinc.300'),
          '--tw-prose-td-borders': theme('colors.zinc.200'),

          '--tw-prose-invert-body': theme('colors.zinc.400'),
          '--tw-prose-invert-headings': theme('colors.white'),
          '--tw-prose-invert-links': theme('colors.sky.400'),
          '--tw-prose-invert-links-hover': theme('colors.sky.500'),
          '--tw-prose-invert-links-underline': theme(
            'colors.sky.500 / 0.3',
          ),
          '--tw-prose-invert-bold': theme('colors.white'),
          '--tw-prose-invert-counters': theme('colors.zinc.400'),
          '--tw-prose-invert-bullets': theme('colors.zinc.600'),
          '--tw-prose-invert-hr': theme('colors.white / 0.05'),
          '--tw-prose-invert-quotes': theme('colors.zinc.100'),
          '--tw-prose-invert-quote-borders': theme('colors.zinc.700'),
          '--tw-prose-invert-captions': theme('colors.zinc.400'),
          '--tw-prose-invert-code': theme('colors.white'),
          '--tw-prose-invert-code-bg': theme('colors.zinc.700 / 0.15'),
          '--tw-prose-invert-code-ring': theme('colors.white / 0.1'),
          '--tw-prose-invert-th-borders': theme('colors.zinc.600'),
          '--tw-prose-invert-td-borders': theme('colors.zinc.700'),

          // Base
          color: 'var(--tw-prose-body)',
          fontSize: theme('fontSize.sm')[0],
          lineHeight: theme('lineHeight.7'),

          // Text
          p: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
          },
          '[class~="lead"]': {
            fontSize: theme('fontSize.base')[0],
            ...theme('fontSize.base')[1],
          },

          // Lists
          ol: {
            listStyleType: 'decimal',
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5'),
            paddingLeft: '1.625rem',
          },
          'ol[type="A"]': {
            listStyleType: 'upper-alpha',
          },
          'ol[type="a"]': {
            listStyleType: 'lower-alpha',
          },
          'ol[type="A" s]': {
            listStyleType: 'upper-alpha',
          },
          'ol[type="a" s]': {
            listStyleType: 'lower-alpha',
          },
          'ol[type="I"]': {
            listStyleType: 'upper-roman',
          },
          'ol[type="i"]': {
            listStyleType: 'lower-roman',
          },
          'ol[type="I" s]': {
            listStyleType: 'upper-roman',
          },
          'ol[type="i" s]': {
            listStyleType: 'lower-roman',
          },
          'ol[type="1"]': {
            listStyleType: 'decimal',
          },
          ul: {
            listStyleType: 'disc',
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5'),
            paddingLeft: '1.625rem',
          },
          li: {
            marginTop: theme('spacing.2'),
            marginBottom: theme('spacing.2'),
          },
          ':is(ol, ul) > li': {
            paddingLeft: theme('spacing[1.5]'),
          },
          'ol > li::marker': {
            fontWeight: '400',
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          '> ul > li p': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },
          '> ul > li > *:first-child': {
            marginTop: theme('spacing.5'),
          },
          '> ul > li > *:last-child': {
            marginBottom: theme('spacing.5'),
          },
          '> ol > li > *:first-child': {
            marginTop: theme('spacing.5'),
          },
          '> ol > li > *:last-child': {
            marginBottom: theme('spacing.5'),
          },
          'ul ul, ul ol, ol ul, ol ol': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },

          // Horizontal rules
          hr: {
            borderColor: 'var(--tw-prose-hr)',
            borderTopWidth: 1,
            marginTop: theme('spacing.16'),
            marginBottom: theme('spacing.16'),
            maxWidth: 'none',
            marginLeft: `calc(-1 * ${theme('spacing.4')})`,
            marginRight: `calc(-1 * ${theme('spacing.4')})`,
            '@screen sm': {
              marginLeft: `calc(-1 * ${theme('spacing.6')})`,
              marginRight: `calc(-1 * ${theme('spacing.6')})`,
            },
            '@screen lg': {
              marginLeft: `calc(-1 * ${theme('spacing.8')})`,
              marginRight: `calc(-1 * ${theme('spacing.8')})`,
            },
          },

          // Quotes
          blockquote: {
            fontWeight: '500',
            fontStyle: 'italic',
            color: 'var(--tw-prose-quotes)',
            borderLeftWidth: '0.25rem',
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            quotes: '"\\201C""\\201D""\\2018""\\2019"',
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.8'),
            paddingLeft: theme('spacing.5'),
          },
          'blockquote p:first-of-type::before': {
            content: 'open-quote',
          },
          'blockquote p:last-of-type::after': {
            content: 'close-quote',
          },

          // Headings
          h1: {
            color: 'var(--tw-prose-headings)',
            fontWeight: '700',
            fontSize: theme('fontSize.2xl')[0],
            ...theme('fontSize.2xl')[1],
            marginBottom: theme('spacing.2'),
          },
          h2: {
            color: 'var(--tw-prose-headings)',
            fontWeight: '600',
            fontSize: theme('fontSize.lg')[0],
            ...theme('fontSize.lg')[1],
            marginTop: theme('spacing.16'),
            marginBottom: theme('spacing.2'),
          },
          h3: {
            color: 'var(--tw-prose-headings)',
            fontSize: theme('fontSize.base')[0],
            ...theme('fontSize.base')[1],
            fontWeight: '600',
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.2'),
          },

          // Media
          'img, video, figure': {
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.8'),
          },
          'figure > *': {
            marginTop: '0',
            marginBottom: '0',
          },
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.xs')[0],
            ...theme('fontSize.xs')[1],
            marginTop: theme('spacing.2'),
          },

          // Tables
          table: {
            width: '100%',
            tableLayout: 'auto',
            textAlign: 'left',
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.8'),
            lineHeight: theme('lineHeight.6'),
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)',
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: '600',
            verticalAlign: 'bottom',
            paddingRight: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.2'),
          },
          'thead th:first-child': {
            paddingLeft: '0',
          },
          'thead th:last-child': {
            paddingRight: '0',
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-td-borders)',
          },
          'tbody tr:last-child': {
            borderBottomWidth: '0',
          },
          'tbody td': {
            verticalAlign: 'baseline',
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: 'var(--tw-prose-th-borders)',
          },
          'tfoot td': {
            verticalAlign: 'top',
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:first-child': {
            paddingLeft: '0',
          },
          ':is(tbody, tfoot) td:last-child': {
            paddingRight: '0',
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            textDecoration: 'underline transparent',
            fontWeight: '500',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.DEFAULT'),
            transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
            '&:hover': {
              color: 'var(--tw-prose-links-hover)',
              textDecorationColor: 'var(--tw-prose-links-underline)',
            },
          },
          ':is(h1, h2, h3) a': {
            fontWeight: 'inherit',
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: '600',
          },
          ':is(a, blockquote, thead th) strong': {
            color: 'inherit',
          },
          code: {
            color: 'var(--tw-prose-code)',
            borderRadius: theme('borderRadius.lg'),
            paddingTop: theme('padding.1'),
            paddingRight: theme('padding[1.5]'),
            paddingBottom: theme('padding.1'),
            paddingLeft: theme('padding[1.5]'),
            boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
            backgroundColor: 'var(--tw-prose-code-bg)',
            fontSize: theme('fontSize.2xs'),
          },
          ':is(a, h1, h2, h3, blockquote, thead th) code': {
            color: 'inherit',
          },
          'h2 code': {
            fontSize: theme('fontSize.base')[0],
            fontWeight: 'inherit',
          },
          'h3 code': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: 'inherit',
          },

          // Overrides
          ':is(h1, h2, h3) + *': {
            marginTop: '0',
          },
          '> :first-child': {
            marginTop: '0 !important',
          },
          '> :last-child': {
            marginBottom: '0 !important',
          },
        },
      },
      invert: {
        css: {
          '--tw-prose-body': 'var(--tw-prose-invert-body)',
          '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
          '--tw-prose-links': 'var(--tw-prose-invert-links)',
          '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
          '--tw-prose-links-underline':
            'var(--tw-prose-invert-links-underline)',
          '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
          '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
          '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
          '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
          '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
          '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
          '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
          '--tw-prose-code': 'var(--tw-prose-invert-code)',
          '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
          '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
          '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
          '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
        },
      },
    }),
  },
} satisfies Config
````
