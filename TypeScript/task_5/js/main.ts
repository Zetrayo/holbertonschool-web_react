export interface MajorCredits {
    _brandMajor: void;
    credits: number;
}

export interface MinorCredits {
    _brandMinor: void;
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brandMajor: undefined,
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brandMinor: undefined,
    };
}

const subject1: MajorCredits = { credits: 15, _brandMajor: undefined };
const subject2: MajorCredits = { credits: 20, _brandMajor: undefined };
const subject3: MinorCredits = { credits: 5, _brandMinor: undefined };
const subject4: MinorCredits = { credits: 3, _brandMinor: undefined };
const totalMajorCredits = sumMajorCredits(subject1, subject2);
console.log('Total Major Credits:', totalMajorCredits);
const totalMinorCredits = sumMinorCredits(subject3, subject4);
console.log('Total Minor Credits:', totalMinorCredits);
