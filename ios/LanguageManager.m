//
//  LanguageManager.m
//  Floos
//
//  Created by Pavel Lapin on 22.04.2022.
//

#import <Foundation/Foundation.h>
#import "LanguageManager.h"


static NSString * const languageUserDefaultsKey = @"appLang";
static NSString * const defaultLanguage = @"en";

@implementation LanguageManager

-(id)init {
  supportedLanguages = @[defaultLanguage, @"ar"];
  rtlLanguages = @[@"ar"];
  NSUserDefaults *userDefaults = [NSUserDefaults new];
  NSString *userDefaultsLang = [userDefaults stringForKey:languageUserDefaultsKey];
  [self setLanguage:userDefaultsLang];
  NSLog(@"Lang is %@", language);
  return self;
}

-(BOOL)isAllowRTL {
  return [rtlLanguages containsObject: language];
}

-(NSString *)getLanguage {
  return language;
}
-(NSString *)setLanguage:(NSString*)lang {
  NSString *systemLang = [[[NSLocale preferredLanguages] firstObject] componentsSeparatedByString:@"_"][0];
  if ([supportedLanguages containsObject: lang]) {
    language = lang;
  } else if ([supportedLanguages containsObject: systemLang]) {
    language = systemLang;
  } else {
    language = defaultLanguage;
  }
  NSUserDefaults *userDefaults = [NSUserDefaults new];
  [userDefaults setObject:language forKey:languageUserDefaultsKey];
  return language;
}

@end;
