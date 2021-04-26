const BankService = require("../src/services/bank");
const { Container }  = require("typedi");

describe("BanksService", () => {
  const banksService = Container.get(BankService);
  it("getBanks() should fetch and return a list of banks from bankService", async () => {
    const listOfBanks = [
      { id: "5d6fe57a4099cc4b210bbeb1", name: "First Bank of Nigeria" },
      { id: "5d6fe57a4099cc4b210bbeb0", name: "Fidelity Bank" },
      { id: "5d6fe57a4099cc4b210bbeb4", name: "Heritage Bank" },
    ];

    const { banks } = await banksService.GetBanks();
    expect(banks).toEqual(listOfBanks);
  });

  it("the fetch fails with an error", async () => {
    expect.assertions(1);
    try {
      await banksService.GetBanks();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
