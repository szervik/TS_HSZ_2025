export function LogAddition(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = propertyDescriptor.value;

  propertyDescriptor.value = function (...args: any[]) {
    console.log(`${propertyName} Item adding: `, args[0]);
    return originalMethod.apply(this, args);
  };

  return propertyDescriptor;
}
