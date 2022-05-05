@interface LanguageManager: NSObject {
  NSArray *supportedLanguages;
  NSArray *rtlLanguages;
  NSString *language;
}

- (BOOL)isAllowRTL;
- (NSString *)getLanguage;
- (NSString *)setLanguage: (NSString *)lang;
- (NSArray *)getSupportedLanguages;
@end
