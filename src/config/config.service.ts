export class ConfigService {
  static checkEnv(envProps: Array<keyof NodeJS.ProcessEnv>): void {
    for (const env of envProps) {
      if (!process.env[env]) {
        throw new Error(`Env variable is not set: ${env}`);
      }
    }
  }

  static checkEnumValue<T extends string>(
    envProp: keyof NodeJS.ProcessEnv,
    enumType: Record<string, T>
  ): void {
    const envVarValue = process.env[envProp];
    if (!envVarValue && Object.values(enumType).includes(envVarValue as T)) {
      throw new Error(`Unsupported value for ${envProp}: ${envVarValue as string}`);
    }
  }
}
