/**
 * Created by UCHATNU on 7/4/2016.
 */

jest.dontMock("../../../src/components/App");


  describe("App component test",()=>{
      it("defined class",()=>{
            let App = require("../../../src/components/App");
            let className = App.default.name;

             expect(className).toEqual("App");
      });
  });

