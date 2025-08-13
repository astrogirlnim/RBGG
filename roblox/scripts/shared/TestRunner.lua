-- TestRunner.lua
-- Central test runner for all TestEZ unit tests

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TestEZ = require(ReplicatedStorage.Packages.TestEZ)

-- Test runner configuration
local TestRunner = {}

--[[
  Runs all tests in the specified test directories
  @param testRoots - Array of test root instances to scan
  @return TestResults object with results
]]
function TestRunner.runTests(testRoots)
  print("🧪 Starting TestEZ test suite...")

  local startTime = tick()
  local results = TestEZ.TestBootstrap:run(testRoots)
  local duration = tick() - startTime

  -- Log test results with detailed output
  print("📊 Test Results:")
  print("  ✅ Passed:", results.passedCount)
  print("  ❌ Failed:", results.failureCount)
  print("  ⏱️ Duration:", string.format("%.2fs", duration))

  if results.failureCount > 0 then
    print("🚨 Test failures detected:")
    for _, failure in ipairs(results.errors) do
      print("  💥", failure.message)
    end
  else
    print("🎉 All tests passed!")
  end

  return results
end

--[[
  Runs tests specifically for template validation
]]
function TestRunner.runTemplateTests()
  local testRoots = {
    ReplicatedStorage.Templates,
  }
  return TestRunner.runTests(testRoots)
end

--[[
  Runs all shared module tests
]]
function TestRunner.runSharedTests()
  local testRoots = {
    ReplicatedStorage.Shared,
  }
  return TestRunner.runTests(testRoots)
end

return TestRunner
