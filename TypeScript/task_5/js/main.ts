export interface MajorCredits {
    _brand: string;
    credits: number;
  }
export interface MinorCredits {
    _brand: string;
    credits: number;
  }
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "MajorCredits"
    };
  }
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "MinorCredits"
    };
  }
const subject1: MajorCredits = { credits: 15, _brand: 'MajorCredits' };
const subject2: MajorCredits = { credits: 20, _brand: 'MajorCredits' };
const subject3: MinorCredits = { credits: 5, _brand: 'MinorCredits' };
const subject4: MinorCredits = { credits: 3, _brand: 'MinorCredits' };
const totalMajorCredits = sumMajorCredits(subject1, subject2);
console.log('Total Major Credits:', totalMajorCredits);
const totalMinorCredits = sumMinorCredits(subject3, subject4);
console.log('Total Minor Credits:', totalMinorCredits);
