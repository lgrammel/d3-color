export default function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

export function extend(parent, definition) {
  const prototype = Object.create(parent.prototype);
  for (const key in definition) prototype[key] = definition[key];
  return prototype;
}
