/**
 * Repräsentiert einen Benutzer im System.
 *
 * @remarks
 * Diese Klasse dient als Beispiel für eine sauber dokumentierte TypeScript-Klasse mit TSDoc.
 * Sie enthält grundlegende Eigenschaften und Methoden zur Verwaltung eines Benutzers.
 *
 * @example
 * ```ts
 * const user = new User("Max", "Mustermann", 25);
 * console.log(user.getFullName()); // "Max Mustermann"
 * user.incrementAge();
 * console.log(user.age); // 26
 * ```
 */
export class User {
  /**
   * Der Vorname des Benutzers.
   */
  public firstName: string;

  /**
   * Der Nachname des Benutzers.
   */
  public lastName: string;

  /**
   * Das Alter des Benutzers in Jahren.
   */
  public age: number;

		/**
			* @deprecated
		* Das Alter des Benutzers in Jahren.
		*/
  public fullName: string | undefined;


  /**
   * Erstellt eine neue Instanz eines Benutzers.
   *
   * @param firstName - Der Vorname des Benutzers.
   * @param lastName - Der Nachname des Benutzers.
   * @param age - Das Alter des Benutzers in Jahren.
   */
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  /**
   * Gibt den vollständigen Namen des Benutzers zurück.
   *
   * @returns Der vollständige Name in der Form „Vorname Nachname“.
   */
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Erhöht das Alter des Benutzers um 1 Jahr.
   *
   * @remarks
   * Diese Methode verändert den Zustand der Instanz direkt.
   */
  public incrementAge(): void {
    this.age++;
  }

  /**
   * Überprüft, ob der Benutzer volljährig ist.
   *
   * @returns `true`, wenn das Alter ≥ 18 ist, sonst `false`.
   */
  public isAdult(): boolean {
    return this.age >= 18;
  }
}
