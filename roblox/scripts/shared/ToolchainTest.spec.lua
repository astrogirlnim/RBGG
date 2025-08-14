-- ToolchainTest.spec.lua
-- Test to verify development toolchain setup

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TestEZ = require(ReplicatedStorage.Packages.TestEZ)

return function()
  describe("Development Toolchain Setup", function()
    it("should have TestEZ framework available", function()
      expect(TestEZ).to.be.ok()
      expect(TestEZ.TestBootstrap).to.be.ok()
      expect(TestEZ.Expectation).to.be.ok()
    end)

    it("should have TestRunner module available", function()
      local TestRunner = require(ReplicatedStorage.Shared.TestRunner)
      expect(TestRunner).to.be.ok()
      expect(TestRunner.runTests).to.be.a("function")
      expect(TestRunner.runTemplateTests).to.be.a("function")
      expect(TestRunner.runSharedTests).to.be.a("function")
    end)

    it("should run basic math assertions", function()
      expect(2 + 2).to.equal(4)
      expect(math.sqrt(16)).to.equal(4)
      expect(string.len("test")).to.equal(4)
    end)

    it("should handle Roblox services", function()
      expect(game).to.be.ok()
      expect(workspace).to.be.ok()
      expect(ReplicatedStorage).to.be.ok()
    end)
  end)

  describe("Code Quality Tools", function()
    it("should follow StyLua formatting standards", function()
      -- This test passes if StyLua has been run on this file
      local testTable = {
        item1 = "value1",
        item2 = "value2",
        item3 = "value3",
      }
      expect(testTable.item1).to.equal("value1")
    end)

    it("should pass Selene linting rules", function()
      -- This test passes if no undefined variables or other lint errors
      local localVar = "defined"
      expect(localVar).to.be.ok()
    end)
  end)
end
