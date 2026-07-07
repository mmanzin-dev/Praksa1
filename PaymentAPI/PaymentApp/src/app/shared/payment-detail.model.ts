export class PaymentDetail {
    // Name them properly
    // DOTNET is PascalCase while API is camelCase
    // Just copy response JSON from API and use those names
    paymentDetailId: number = 0
    cardOwnerName: string = ""
    cardNumber: string = ""
    expirationDate: string = ""
    securityCode: string = ""
}
