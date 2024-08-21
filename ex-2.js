// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = true;
hasAttendedDiscountEvent = false;
isPlatinum = false;

let hasPromotion;
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory &&!hasAttendedDiscountEvent) || isPlatinum;
console.log(hasPromotion);
