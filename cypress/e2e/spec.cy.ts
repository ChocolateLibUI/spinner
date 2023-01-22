/// <reference types="cypress" />
import { Dots } from "../../src"

describe('Tests', () => {
  it('Instance', () => {
    expect(new Dots()).to.instanceOf(Dots);
  })
})