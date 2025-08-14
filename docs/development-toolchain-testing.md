# Local Development Toolchain Testing Guide

This guide covers how to test and verify the Phase 1, Step 2 implementation of the Roblox Local Development Toolchain.

## Quick Test Commands

```bash
# Test the complete Roblox development workflow
npm run roblox-dev

# Test individual components
npm run roblox-format-check    # Check code formatting
npm run roblox-lint           # Run linting
npm run rojo-build            # Test Rojo build
npm run wally-install         # Install packages
```

## Component Testing

### 1. Rojo Configuration Test

```bash
# Validate Rojo project configuration
rojo fmt-project roblox/default.project.json

# Test building the project
rojo build roblox/default.project.json --output builds/test.rbxl

# Test live sync (requires Roblox Studio)
rojo serve roblox/default.project.json
```

**Expected Results:**
- ✅ No configuration errors
- ✅ Successful build output
- ✅ Live sync server starts on port 34872

### 2. StyLua Formatting Test

```bash
# Check formatting without making changes
stylua --check roblox/scripts/

# Apply formatting
stylua roblox/scripts/

# Test specific file
stylua --check roblox/scripts/shared/TestRunner.lua
```

**Expected Results:**
- ✅ Code follows consistent formatting rules
- ✅ No formatting errors
- ✅ Trailing commas added to tables

### 3. Selene Linting Test

```bash
# Lint all Lua files
selene roblox/scripts/**/*.lua

# Lint specific file
selene roblox/scripts/shared/TestRunner.lua

# Verify configuration
selene --config selene.toml --help
```

**Expected Results:**
- ✅ 0 errors, 0 warnings, 0 parse errors
- ✅ Roblox globals recognized
- ✅ TestEZ globals allowed

### 4. Wally Package Management Test

```bash
# Install packages
wally install

# Check installed packages
ls -la Packages/

# Verify TestEZ installation
ls -la Packages/_Index/roblox_testez*/
```

**Expected Results:**
- ✅ Packages directory created
- ✅ TestEZ package installed
- ✅ wally.lock file generated

### 5. TestEZ Framework Test

**Create a test file to verify TestEZ:**

```lua
-- roblox/scripts/shared/ExampleTest.spec.lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TestEZ = require(ReplicatedStorage.Packages.TestEZ)

return function()
  describe("Development Toolchain", function()
    it("should have TestEZ available", function()
      expect(TestEZ).to.be.ok()
      expect(TestEZ.TestBootstrap).to.be.ok()
    end)
    
    it("should run basic assertions", function()
      expect(1 + 1).to.equal(2)
      expect("hello").to.be.a("string")
    end)
  end)
end
```

**Run in Roblox Studio:**
1. Start Rojo sync: `npm run rojo-sync`
2. Open Roblox Studio
3. Create new place and connect to Rojo
4. Run TestRunner script in Studio

### 6. Cursor IDE Integration Test

**Verify Cursor configuration:**

1. **Check extensions are recommended:**
   - Open Command Palette in Cursor
   - Search "Extensions: Show Recommended Extensions"
   - Verify Luau, StyLua, Selene, and Rojo extensions appear

2. **Test Luau Language Server:**
   - Open any .lua file in `roblox/scripts/`
   - Type `game.` and verify autocomplete appears
   - Hover over Roblox services for documentation

3. **Test StyLua integration:**
   - Open a .lua file
   - Use Cmd/Ctrl+Shift+P → "Format Document"
   - Verify code formats according to stylua.toml

4. **Test Selene integration:**
   - Create a .lua file with intentional errors
   - Verify red squiggly underlines appear for issues

## End-to-End Workflow Test

### Complete Development Cycle

```bash
# 1. Install dependencies and format code
npm run roblox-dev

# 2. Create a new Lua script
cat > roblox/scripts/shared/HelloWorld.lua << 'EOF'
-- HelloWorld.lua
local HelloWorld = {}

function HelloWorld.greet(name)
  print("Hello, " .. (name or "World") .. "!")
  return "Hello, " .. (name or "World") .. "!"
end

return HelloWorld
EOF

# 3. Format the new file
stylua roblox/scripts/shared/HelloWorld.lua

# 4. Lint the new file
selene roblox/scripts/shared/HelloWorld.lua

# 5. Build the project
rojo build roblox/default.project.json --output builds/test-build.rbxl

# 6. Verify build succeeded
ls -la builds/test-build.rbxl
```

### Integration with Roblox Studio

1. **Start Rojo sync:**
   ```bash
   npm run rojo-sync
   ```

2. **In Roblox Studio:**
   - Create new place
   - Go to Plugins → Rojo → Connect
   - Connect to localhost:34872
   - Verify scripts sync automatically

3. **Test live editing:**
   - Edit a file in Cursor
   - Save the file
   - Verify changes appear instantly in Studio

## Troubleshooting

### Common Issues

**1. Rojo build fails:**
```bash
# Check project configuration
rojo fmt-project roblox/default.project.json

# Verify paths exist
ls -la roblox/scripts/
ls -la roblox/templates/
```

**2. Wally packages not found:**
```bash
# Reinstall packages
rm -rf Packages/
wally install

# Check Rojo includes Packages
grep -A 5 "Packages" roblox/default.project.json
```

**3. Selene configuration errors:**
```bash
# Validate configuration
selene --config selene.toml --display-style=quiet roblox/scripts/shared/TestRunner.lua

# Check std library
selene --list-std
```

**4. StyLua formatting issues:**
```bash
# Check configuration
stylua --verify stylua.toml

# Test on single file
stylua --config-path stylua.toml roblox/scripts/shared/TestRunner.lua
```

## Success Criteria

✅ **All tools installed and configured correctly**  
✅ **Code formats consistently with StyLua**  
✅ **No linting errors with Selene**  
✅ **Rojo builds and syncs successfully**  
✅ **Wally packages install correctly**  
✅ **TestEZ framework available**  
✅ **Cursor IDE provides full IntelliSense**  
✅ **Live sync works with Roblox Studio**  

## Performance Benchmarks

- **Rojo build time:** < 5 seconds for basic project
- **Selene linting:** < 1 second for 10+ files  
- **StyLua formatting:** < 1 second for 10+ files
- **Live sync latency:** < 500ms from save to Studio update

## Next Steps

After successful testing, you're ready for:
- **Phase 1, Step 3:** Roblox Open Cloud Integration
- Adding actual game template code
- Setting up automated testing in CI/CD
