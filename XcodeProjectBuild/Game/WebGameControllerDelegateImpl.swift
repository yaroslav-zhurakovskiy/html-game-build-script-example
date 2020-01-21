class WebGameControllerDelegateImpl: WebGameControllerDelegate {
    private let handler = SandboxObjectRequestHandler()
    
    func webGameWilLoad(_ controller: WebGameController) {
        
        handler.register(GoogleAdmob())
        
        
        handler.register(MintegralBanner())
        handler.register(MintegralInterstitialVideoAd())
        
        
    }
    
    func webGameConroller(_ controller: WebGameController, didReceiveRequest request: SandboxObjectRequest) {   
        handler.handle(request, from: controller)
    }
}
