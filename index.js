class Wrapper {
  constructor(_v) {
    this.v = _v
  }
  
  map(f) {
    return f(this.v)
  }

  static wrap(_v) {
    return new Wrapper(_v)
  }
}

const wrapped = Wrapper.wrap(3) // Wrapper { v: 3}

// ラップされた値に関数を適用する
const result = wrapped.map(x => x + 1) // 4




class Functor {
  constructor(_v) {
    this.v = _v
  }

  static wrap(_v) {
    return new Functor(_v)
  }

  fmap(f) {
    return Functor.wrap(f(this.v))
  }
}

const functor = Functor.wrap(3) // Functor { v: 3}

const fmapResult = functor.fmap(x => x + 1) // Functor { v: 4 }

const fmapChainedResult = functor.fmap(x => x + 1).fmap(x => x + 1) // Functor { v: 5}