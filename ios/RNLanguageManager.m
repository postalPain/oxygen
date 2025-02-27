//
//  RNLanguageManager.m
//  Floos
//
//  Created by Pavel Lapin on 22.04.2022.
//

#import <Foundation/Foundation.h>
#import "RNLanguageManager.h"

@implementation RNLanguageManager: LanguageManager
RCT_EXPORT_MODULE()

- (void)loadBundle
{
    RCTTriggerReloadCommandListeners(@"react-native-restart: Restart");
}

RCT_EXPORT_METHOD(getLang:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)
{
  resolve([self getLanguage]);
}

RCT_EXPORT_METHOD(setLang:(NSString *)lang:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *updatedLanguage = [self setLanguage:lang];
  BOOL isAllowRTL = [self isAllowRTL];
  [[RCTI18nUtil sharedInstance] allowRTL: isAllowRTL];
  [[RCTI18nUtil sharedInstance] forceRTL: isAllowRTL];
  resolve(updatedLanguage);
}

- (NSDictionary *)constantsToExport
{
  NSError* error = nil;
  NSData *supportedLanguagesJsonData = [NSJSONSerialization dataWithJSONObject:[self getSupportedLanguages] options:NSJSONWritingPrettyPrinted error:&error];
  NSString *supportedLanguagesString = [[NSString alloc] initWithData:supportedLanguagesJsonData encoding:NSUTF8StringEncoding];

 return @{
   @"INITIAL_LANGUAGE": [self getLanguage],
   @"SUPPORTED_LANGUAGES": error ? @"[]" : supportedLanguagesString,
 };
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end;
